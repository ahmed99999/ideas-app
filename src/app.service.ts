import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWebsiteMessage(): string {
    return 'my webside - api v1';
  }
}
