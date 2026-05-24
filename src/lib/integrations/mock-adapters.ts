import { IntegrationAdapter, IntegrationStatus } from './base-adapter';

export class MockInstagramAdapter implements IntegrationAdapter {
  name = 'Instagram Business';
  provider = 'instagram';

  async connect(credentials: Record<string, any>): Promise<boolean> {
    console.log('Connecting to Instagram Business');
    return new Promise(resolve => setTimeout(() => resolve(true), 1000));
  }

  async disconnect(): Promise<boolean> {
    console.log('Disconnecting from Instagram Business');
    return true;
  }

  async sync(): Promise<void> {
    console.log('Syncing Instagram data...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Instagram data synced successfully');
  }

  async getStatus(): Promise<IntegrationStatus> {
    return IntegrationStatus.CONNECTED;
  }

  async validateCredentials(credentials: Record<string, any>): Promise<boolean> {
    return !!credentials.accessToken && !!credentials.pageId;
  }
}

export class MockFacebookAdapter implements IntegrationAdapter {
  name = 'Facebook Pages';
  provider = 'facebook';

  async connect(credentials: Record<string, any>): Promise<boolean> {
    console.log('Connecting to Facebook Pages');
    return new Promise(resolve => setTimeout(() => resolve(true), 1000));
  }

  async disconnect(): Promise<boolean> {
    console.log('Disconnecting from Facebook Pages');
    return true;
  }

  async sync(): Promise<void> {
    console.log('Syncing Facebook data...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Facebook data synced successfully');
  }

  async getStatus(): Promise<IntegrationStatus> {
    return IntegrationStatus.CONNECTED;
  }

  async validateCredentials(credentials: Record<string, any>): Promise<boolean> {
    return !!credentials.accessToken && !!credentials.pageId;
  }
}

export class MockWhatsAppAdapter implements IntegrationAdapter {
  name = 'WhatsApp Business Cloud API';
  provider = 'whatsapp';

  async connect(credentials: Record<string, any>): Promise<boolean> {
    console.log('Connecting to WhatsApp Business');
    return new Promise(resolve => setTimeout(() => resolve(true), 1000));
  }

  async disconnect(): Promise<boolean> {
    console.log('Disconnecting from WhatsApp Business');
    return true;
  }

  async sync(): Promise<void> {
    console.log('Syncing WhatsApp data...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('WhatsApp data synced successfully');
  }

  async getStatus(): Promise<IntegrationStatus> {
    return IntegrationStatus.CONNECTED;
  }

  async validateCredentials(credentials: Record<string, any>): Promise<boolean> {
    return !!credentials.accessToken && !!credentials.accountId;
  }
}

export class MockTikTokAdapter implements IntegrationAdapter {
  name = 'TikTok Business';
  provider = 'tiktok';

  async connect(credentials: Record<string, any>): Promise<boolean> {
    console.log('Connecting to TikTok Business');
    return new Promise(resolve => setTimeout(() => resolve(true), 1000));
  }

  async disconnect(): Promise<boolean> {
    console.log('Disconnecting from TikTok Business');
    return true;
  }

  async sync(): Promise<void> {
    console.log('Syncing TikTok data...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('TikTok data synced successfully');
  }

  async getStatus(): Promise<IntegrationStatus> {
    return IntegrationStatus.CONNECTED;
  }

  async validateCredentials(credentials: Record<string, any>): Promise<boolean> {
    return !!credentials.accessToken && !!credentials.businessAccountId;
  }
}

export class MockGoogleAdsAdapter implements IntegrationAdapter {
  name = 'Google Ads';
  provider = 'google_ads';

  async connect(credentials: Record<string, any>): Promise<boolean> {
    console.log('Connecting to Google Ads');
    return new Promise(resolve => setTimeout(() => resolve(true), 1000));
  }

  async disconnect(): Promise<boolean> {
    console.log('Disconnecting from Google Ads');
    return true;
  }

  async sync(): Promise<void> {
    console.log('Syncing Google Ads data...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Google Ads data synced successfully');
  }

  async getStatus(): Promise<IntegrationStatus> {
    return IntegrationStatus.CONNECTED;
  }

  async validateCredentials(credentials: Record<string, any>): Promise<boolean> {
    return !!credentials.refreshToken && !!credentials.clientId;
  }
}

export class MockGmailAdapter implements IntegrationAdapter {
  name = 'Gmail';
  provider = 'gmail';

  async connect(credentials: Record<string, any>): Promise<boolean> {
    console.log('Connecting to Gmail');
    return new Promise(resolve => setTimeout(() => resolve(true), 1000));
  }

  async disconnect(): Promise<boolean> {
    console.log('Disconnecting from Gmail');
    return true;
  }

  async sync(): Promise<void> {
    console.log('Syncing Gmail data...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Gmail data synced successfully');
  }

  async getStatus(): Promise<IntegrationStatus> {
    return IntegrationStatus.CONNECTED;
  }

  async validateCredentials(credentials: Record<string, any>): Promise<boolean> {
    return !!credentials.refreshToken && !!credentials.clientId;
  }
}

export class MockWebChatAdapter implements IntegrationAdapter {
  name = 'Web Chat Widget';
  provider = 'web_chat';

  async connect(credentials: Record<string, any>): Promise<boolean> {
    console.log('Connecting to Web Chat Widget');
    return new Promise(resolve => setTimeout(() => resolve(true), 1000));
  }

  async disconnect(): Promise<boolean> {
    console.log('Disconnecting from Web Chat Widget');
    return true;
  }

  async sync(): Promise<void> {
    console.log('Syncing Web Chat data...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Web Chat data synced successfully');
  }

  async getStatus(): Promise<IntegrationStatus> {
    return IntegrationStatus.CONNECTED;
  }

  async validateCredentials(credentials: Record<string, any>): Promise<boolean> {
    return !!credentials.widgetId && !!credentials.domain;
  }
}

export class AdapterFactory {
  static getAdapter(provider: string): IntegrationAdapter {
    switch (provider.toLowerCase()) {
      case 'instagram':
        return new MockInstagramAdapter();
      case 'facebook':
        return new MockFacebookAdapter();
      case 'whatsapp':
        return new MockWhatsAppAdapter();
      case 'tiktok':
        return new MockTikTokAdapter();
      case 'google_ads':
        return new MockGoogleAdsAdapter();
      case 'gmail':
        return new MockGmailAdapter();
      case 'web_chat':
        return new MockWebChatAdapter();
      default:
        throw new Error(`Unsupported provider: ${provider}`);
    }
  }
}
