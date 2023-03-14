import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getUserList() {
    const user = [
      {
        id: 1,
        name: 'A',
      },
      {
        id: 2,
        name: 'B',
      },
    ];
    return user;
  }
}
