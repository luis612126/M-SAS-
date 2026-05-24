export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  SALES_REP = 'sales_rep',
  MARKETER = 'marketer',
  CUSTOMER_SUPPORT = 'customer_support',
  GUEST = 'guest'
}

export enum ClientStatus {
  LEAD = 'lead',
  PROSPECT = 'prospect',
  CUSTOMER = 'customer',
  INACTIVE = 'inactive'
}

export enum LeadSource {
  WEBSITE = 'website',
  SOCIAL_MEDIA = 'social_media',
  REFERRAL = 'referral',
  EMAIL_CAMPAIGN = 'email_campaign',
  PAID_AD = 'paid_ad',
  EVENT = 'event',
  OTHER = 'other'
}

export enum LeadStatus {
  NEW = 'new',
  CONTACTED = 'contacted',
  QUALIFIED = 'qualified',
  UNQUALIFIED = 'unqualified',
  CONVERTED = 'converted'
}

export enum LeadIntent {
  INFORMATIONAL = 'informational',
  EVALUATION = 'evaluation',
  PURCHASE = 'purchase',
  REPEAT_PURCHASE = 'repeat_purchase'
}

export enum ConversationStatus {
  OPEN = 'open',
  CLOSED = 'closed',
  PENDING = 'pending',
  SPAM = 'spam'
}

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

export enum MessageType {
  TEXT = 'text',
  IMAGE = 'image',
  FILE = 'file',
  SYSTEM = 'system'
}

export enum CampaignType {
  EMAIL = 'email',
  SMS = 'sms',
  SOCIAL_MEDIA = 'social_media',
  WEB_PUSH = 'web_push',
  AUTOMATED_WORKFLOW = 'automated_workflow'
}

export enum CampaignStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  ACTIVE = 'active',
  PAUSED = 'paused',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  REVIEW = 'review',
  DONE = 'done',
  CANCELLED = 'cancelled'
}

export enum RelatedEntityType {
  LEAD = 'lead',
  CLIENT = 'client',
  CONVERSATION = 'conversation',
  CAMPAIGN = 'campaign'
}

export enum IntegrationProvider {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  WHATSAPP = 'whatsapp',
  TIKTOK = 'tiktok',
  GOOGLE_ADS = 'google_ads',
  GOOGLE_ANALYTICS = 'google_analytics',
  YOUTUBE = 'youtube',
  LINKEDIN = 'linkedin',
  GMAIL = 'gmail',
  WEBHOOK = 'webhook',
  WEB_CHAT = 'web_chat'
}

export enum IntegrationStatus {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  ERROR = 'error'
}

export enum AiSuggestionType {
  REPLY_SUGGESTION = 'reply_suggestion',
  LEAD_CLASSIFICATION = 'lead_classification',
  NEXT_ACTION = 'next_action',
  CONTENT_IDEA = 'content_idea',
  CAMPAIGN_OPTIMIZATION = 'campaign_optimization'
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  organizationId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  plan: string;
  settings: any;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Client {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  industry?: string;
  website?: string;
  notes?: string;
  status: ClientStatus;
  tags: string[];
  ownerId: string;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  source: LeadSource;
  status: LeadStatus;
  score: number;
  intent?: LeadIntent;
  campaignId?: string;
  assignedToId?: string;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Conversation {
  id: string;
  title: string;
  participants: string[];
  status: ConversationStatus;
  priority: Priority;
  tags: string[];
  lastMessageAt: Date;
  assignedToId?: string;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  conversationId: string;
  messageType: MessageType;
  metadata?: Record<string, any>;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Campaign {
  id: string;
  name: string;
  description?: string;
  type: CampaignType;
  status: CampaignStatus;
  audience: any;
  startDate: Date;
  endDate: Date;
  budget?: number;
  metrics: Record<string, any>;
  createdBy: string;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: Priority;
  dueDate?: Date;
  assignedToId?: string;
  relatedEntityId?: string;
  relatedEntityType?: RelatedEntityType;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Integration {
  id: string;
  name: string;
  provider: IntegrationProvider;
  status: IntegrationStatus;
  settings: Record<string, any>;
  connectedBy: string;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AiSuggestion {
  id: string;
  type: AiSuggestionType;
  content: string;
  confidence: number;
  context: Record<string, any>;
  applied: boolean;
  appliedBy?: string;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
}
