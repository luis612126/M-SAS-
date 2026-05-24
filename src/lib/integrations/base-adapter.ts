export interface IntegrationAdapter {
  name: string;
  provider: string;
  connect(credentials: Record<string, any>): Promise<boolean>;
  disconnect(): Promise<boolean>;
  sync(): Promise<void>;
  getStatus(): Promise<IntegrationStatus>;
  validateCredentials(credentials: Record<string, any>): Promise<boolean>;
}

export enum IntegrationStatus {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  ERROR = 'error'
}
