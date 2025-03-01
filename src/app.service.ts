import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(): string {
    return 'Hello <h1> aaaaaa   </h1> World!';
  }

  public getDetail(): string {
    return 'Here are Zoo details!';
  }
}
