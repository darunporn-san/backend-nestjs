import { Module } from '@nestjs/common';
import { UserModule } from './api/user/user.module';
import { PreviewModule } from './api/preview/preview.module';

@Module({
  imports: [UserModule, PreviewModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
