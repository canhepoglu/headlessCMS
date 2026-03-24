import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ContentTypeService } from './content-type.service';
import { ContentType, Prisma } from '../generated/client';

@Controller('content-type')
export class ContentTypeController {
	constructor(private readonly contentTypeService: ContentTypeService) {}

	@Get()
	async findAll(): Promise<ContentType[]> {
		return this.contentTypeService.findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<ContentType | null> {
		return this.contentTypeService.findOne(id);
	}

	@Post()
	async create(@Body() data: Prisma.ContentTypeCreateInput): Promise<ContentType> {
		return this.contentTypeService.create(data);
	}

	@Put(':id')
	async update(@Param('id') id: string, @Body() data: Prisma.ContentTypeUpdateInput): Promise<ContentType> {
		return this.contentTypeService.update(id, data);
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<ContentType> {
		return this.contentTypeService.delete(id);
	}
}
