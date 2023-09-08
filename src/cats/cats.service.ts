import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCatDto) {
    const existingCat = await this.prisma.cat.findFirst({
      where: {
        name: data.name,
        breed: data.breed,
      },
    });
    if (existingCat) {
      throw new Error('Um gato com o mesmo nome e raça já está cadastrado.');
    }
    return this.prisma.cat.create({ data });
  }
  

  async findAll() {
    return this.prisma.cat.findMany();
  }

  async findByName(name: string) {
    return this.prisma.cat.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.cat.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateCatDto) {
    return this.prisma.cat.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.cat.delete({ where: { id } });
  }

  
    
}
