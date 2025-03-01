import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'WOW-WOW';
  }

  public introduce(): string {
    return 'My name is REX';
  }

  public modifyDetail(): string {
    return 'You can see successfully modified Person';
  }
}
