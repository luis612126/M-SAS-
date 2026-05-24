interface QwenResponse {
  id: string;
  choices: Array<{
    message: {
      content: string;
      role: string;
    };
    finish_reason: string;
    index: number;
  }>;
  created: number;
  model: string;
  object: string;
  usage: {
    completion_tokens: number;
    prompt_tokens: number;
    total_tokens: number;
  };
}

interface QwenRequest {
  model: string;
  messages: Array<{ role: string; content: string }>;
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
}

export class QwenClient {
  private apiKey: string;
  private baseUrl: string;
  private model: string;

  constructor() {
    this.apiKey = process.env.QWEN_API_KEY || '';
    this.baseUrl = process.env.QWEN_BASE_URL || 'https://dashscope.aliyuncs.com/compatible-mode/v1';
    this.model = process.env.QWEN_MODEL || 'qwen-max';
  }

  async chatCompletion(request: QwenRequest): Promise<QwenResponse> {
    if (!this.apiKey) {
      return this.mockChatCompletion(request);
    }

    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...request,
          model: this.model,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data as QwenResponse;
    } catch (error) {
      console.error('Error calling Qwen API:', error);
      return this.mockChatCompletion(request);
    }
  }

  private async mockChatCompletion(request: QwenRequest): Promise<QwenResponse> {
    const mockResponses: Record<string, string> = {
      'suggest_reply': 'Here is a suggested reply for the customer...',
      'summarize_conversation': 'Conversation summary: The client showed interest in our services...',
      'classify_lead_intent': 'The lead appears to be in the evaluation stage',
      'score_lead': 'Lead quality score: 8.5/10',
      'detect_objection': 'Possible objection detected: Price concern',
      'recommend_next_action': 'Suggestion: Schedule a free demo',
      'generate_campaign_ideas': 'Campaign idea: Summer promotion with exclusive discount',
      'analyze_campaign_performance': 'The campaign is exceeding expectations with a 5% CTR',
    };

    let content = 'Unable to generate a specific response for this request.';

    for (const [key, value] of Object.entries(mockResponses)) {
      if (request.messages.some(msg => msg.content.toLowerCase().includes(key))) {
        content = value;
        break;
      }
    }

    return {
      id: `mock-${Date.now()}`,
      choices: [{
        message: {
          content,
          role: 'assistant'
        },
        finish_reason: 'stop',
        index: 0
      }],
      created: Math.floor(Date.now() / 1000),
      model: this.model,
      object: 'chat.completion',
      usage: {
        completion_tokens: content.split(' ').length,
        prompt_tokens: request.messages.reduce((acc, msg) => acc + msg.content.split(' ').length, 0),
        total_tokens: content.split(' ').length + request.messages.reduce((acc, msg) => acc + msg.content.split(' ').length, 0)
      }
    };
  }
}
