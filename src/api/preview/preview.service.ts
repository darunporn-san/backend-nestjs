import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class PreviewService {
  constructor(private readonly userService: UserService) {}

  async getPreview() {
    return this.userService.getUserList();
  }
}
