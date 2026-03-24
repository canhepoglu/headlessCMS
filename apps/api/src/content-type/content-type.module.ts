import { Module } from '@nestjs/common';
import { ContentTypeService } from './content-type.service';
import { ContentTypeController } from './content-type.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [ContentTypeService, PrismaService],
  controllers: [ContentTypeController]
})
export class ContentTypeModule {}
