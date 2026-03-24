import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ContentTypeModule } from './content-type/content-type.module';
import { FieldModule } from './field/field.module';
import { EntryModule } from './entry/entry.module';
import { EntryValueModule } from './entry-value/entry-value.module';
import { MediaModule } from './media/media.module';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';
import { MenuModule } from './menu/menu.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [AuthModule, UserModule, RoleModule, ContentTypeModule, FieldModule, EntryModule, EntryValueModule, MediaModule, CategoryModule, TagModule, MenuModule, SettingsModule]
})
export class AppModule {}
