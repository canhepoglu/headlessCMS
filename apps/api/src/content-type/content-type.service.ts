import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ContentType, Prisma } from '../generated/client';

@Injectable()
export class ContentTypeService {
	constructor(private prisma: PrismaService) {}

	async findAll(): Promise<ContentType[]> {
		return this.prisma.contentType.findMany({
			include: { fields: true, entries: true },
		});
	}

	async findOne(id: string): Promise<ContentType | null> {
		return this.prisma.contentType.findUnique({
			where: { id },
			include: { fields: true, entries: true },
		});
	}

	async create(data: Prisma.ContentTypeCreateInput): Promise<ContentType> {
		return this.prisma.contentType.create({ data });
	}

	async update(id: string, data: Prisma.ContentTypeUpdateInput): Promise<ContentType> {
		return this.prisma.contentType.update({
			where: { id },
			data,
		});
	}

	async delete(id: string): Promise<ContentType> {
		return this.prisma.contentType.delete({ where: { id } });
	}
}
