import { Module } from '@nestjs/common';
import { EntryValueService } from './entry-value.service';
import { EntryValueController } from './entry-value.controller';

@Module({
  providers: [EntryValueService],
  controllers: [EntryValueController]
})
export class EntryValueModule {}
