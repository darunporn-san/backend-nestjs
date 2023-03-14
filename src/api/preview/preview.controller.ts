import { Controller, Get } from '@nestjs/common';
import { PreviewService } from './preview.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('preview')
@ApiTags('Preview')
export class PreviewController {
  constructor(private readonly previewService: PreviewService) {}
  @Get('')
  async previewUser() {
    return this.previewService.getPreview();
  }
}
