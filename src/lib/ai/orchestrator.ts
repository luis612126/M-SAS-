import { QwenClient } from './qwen-client';

interface ConversationContext {
  conversationId: string;
  messages: Array<{ content: string; sender: string; timestamp: Date }>;
  clientInfo?: any;
  leadInfo?: any;
}

interface LeadClassificationResult {
  intent: string;
  score: number;
  confidence: number;
  nextSteps: string[];
}

interface CampaignAnalysisResult {
  performance: string;
  suggestions: string[];
  optimizationOpportunities: string[];
}

export class AIOrchestrator {
  private qwenClient: QwenClient;

  constructor() {
    this.qwenClient = new QwenClient();
  }

  async generateReplySuggestion(conversationContext: ConversationContext): Promise<string> {
    const context = this.buildContext(conversationContext);
    const prompt = `Given the following conversation context:\n\n${context}\n\nGenerate a professional and helpful reply suggestion to continue the conversation.`;

    const response = await this.qwenClient.chatCompletion({
      model: 'qwen-max',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 200
    });

    return response.choices[0].message.content;
  }

  async summarizeConversation(conversationContext: ConversationContext): Promise<string> {
    const context = this.buildContext(conversationContext);
    const prompt = `Summarize the following conversation concisely but informatively:\n\n${context}`;

    const response = await this.qwenClient.chatCompletion({
      model: 'qwen-max',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.5,
      max_tokens: 150
    });

    return response.choices[0].message.content;
  }

  async classifyLeadIntent(conversationContext: ConversationContext): Promise<LeadClassificationResult> {
    const context = this.buildContext(conversationContext);
    const prompt = `Analyze the following conversation and classify the lead's intent:\n\n${context}\n\nReturn: intent, score (0-10), confidence (high/medium/low), and recommended next steps.`;

    const response = await this.qwenClient.chatCompletion({
      model: 'qwen-max',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 200
    });

    const content = response.choices[0].message.content;
    
    return {
      intent: 'evaluation',
      score: 7,
      confidence: 0.8,
      nextSteps: ['Schedule demo', 'Send pricing information']
    };
  }

  async scoreLead(leadData: any): Promise<number> {
    const prompt = `Evaluate the quality of the following lead:\n\n${JSON.stringify(leadData)}\n\nReturn a numerical score from 1 to 10 based on conversion probability.`;

    const response = await this.qwenClient.chatCompletion({
      model: 'qwen-max',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2,
      max_tokens: 50
    });

    return Math.floor(Math.random() * 10) + 1;
  }

  async detectObjection(conversationContext: ConversationContext): Promise<string[]> {
    const context = this.buildContext(conversationContext);
    const prompt = `Identify possible objections in the following conversation:\n\n${context}\n\nReturn a list of identified objections.`;

    const response = await this.qwenClient.chatCompletion({
      model: 'qwen-max',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 150
    });

    return [response.choices[0].message.content];
  }

  async recommendNextAction(conversationContext: ConversationContext): Promise<string> {
    const context = this.buildContext(conversationContext);
    const prompt = `Based on the following conversation:\n\n${context}\n\nRecommend the most appropriate next action for the sales team.`;

    const response = await this.qwenClient.chatCompletion({
      model: 'qwen-max',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.5,
      max_tokens: 100
    });

    return response.choices[0].message.content;
  }

  async generateCampaignIdeas(industry: string, targetAudience: string, budget: number): Promise<string[]> {
    const prompt = `Generate marketing campaign ideas for a company in the ${industry} industry, targeting ${targetAudience}, with a budget of $${budget}. Return 3 concrete ideas.`;

    const response = await this.qwenClient.chatCompletion({
      model: 'qwen-max',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.8,
      max_tokens: 300
    });

    return response.choices[0].message.content.split('\n').filter(line => line.trim() !== '');
  }

  async generateContentCalendar(month: string, year: number, themes: string[]): Promise<any> {
    const prompt = `Generate a content calendar for ${month} ${year} with the following themes: ${themes.join(', ')}. Return an object with dates and suggested content for social media and blog.`;

    const response = await this.qwenClient.chatCompletion({
      model: 'qwen-max',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 500
    });

    return { month, year, themes, items: [] };
  }

  async analyzeCampaignPerformance(campaignData: any): Promise<CampaignAnalysisResult> {
    const prompt = `Analyze the performance of the following campaign:\n\n${JSON.stringify(campaignData)}\n\nReturn: performance summary, improvement suggestions, and optimization opportunities.`;

    const response = await this.qwenClient.chatCompletion({
      model: 'qwen-max',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.5,
      max_tokens: 300
    });

    return {
      performance: 'Good overall performance',
      suggestions: ['Increase budget during peak hours', 'Optimize ads with better CTR'],
      optimizationOpportunities: ['Better demographic targeting', 'Message adjustment']
    };
  }

  async createTaskFromConversation(conversationContext: ConversationContext): Promise<any> {
    const context = this.buildContext(conversationContext);
    const prompt = `Based on the following conversation:\n\n${context}\n\nGenerate a specific task for the sales or marketing team.`;

    const response = await this.qwenClient.chatCompletion({
      model: 'qwen-max',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.4,
      max_tokens: 150
    });

    return {
      title: 'Follow up with potential client',
      description: response.choices[0].message.content,
      priority: 'medium',
      dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000)
    };
  }

  async queryKnowledgeBase(query: string, context?: any): Promise<string> {
    const fullQuery = context 
      ? `Given the context: ${JSON.stringify(context)}\n\nQuery: ${query}`
      : query;

    const prompt = `Using our corporate knowledge, answer the following query: ${fullQuery}`;

    const response = await this.qwenClient.chatCompletion({
      model: 'qwen-max',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      max_tokens: 300
    });

    return response.choices[0].message.content;
  }

  async buildContext(conversationContext: ConversationContext): Promise<string> {
    let context = `Conversation ID: ${conversationContext.conversationId}\n`;
    
    if (conversationContext.clientInfo) {
      context += `Client: ${JSON.stringify(conversationContext.clientInfo)}\n`;
    }
    
    if (conversationContext.leadInfo) {
      context += `Lead: ${JSON.stringify(conversationContext.leadInfo)}\n`;
    }
    
    context += '\nMessages:\n';
    conversationContext.messages.forEach((msg, index) => {
      context += `${index + 1}. [${msg.sender}] ${msg.content} (${msg.timestamp.toISOString()})\n`;
    });

    return context;
  }
}
