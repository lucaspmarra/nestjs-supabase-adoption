import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() catCreateDto: CreateCatDto, @Res() res: Response) {
    try {
      const cat = await this.catsService.create(catCreateDto);
      res.status(HttpStatus.CREATED).json({
        message: 'Gato criado com sucesso!',
        data: cat,
      });
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro ao criar o gato.',
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const cats = await this.catsService.findAll();
      res.status(HttpStatus.OK).json({
        message: 'Gatos encontrados com sucesso!',
        data: cats,
      });
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro ao buscar os gatos.',
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const cat = await this.catsService.findOne(+id);
      if (!cat) {
        throw new HttpException(
          {
            message: 'Gato não encontrado.',
          },
          HttpStatus.NOT_FOUND,
        );
      }
      res.status(HttpStatus.OK).json({
        message: 'Gato encontrado com sucesso!',
        data: cat,
      });
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro ao buscar o gato.',
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() catUpdateDto: UpdateCatDto,
    @Res() res: Response,
  ) {
    try {
      const cat = await this.catsService.update(+id, catUpdateDto);
      res.status(HttpStatus.OK).json({
        message: 'Gato atualizado com sucesso!',
        data: cat,
      });
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro ao atualizar o gato.',
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      await this.catsService.remove(+id);
      res.status(HttpStatus.OK).json({
        message: 'Gato removido com sucesso!',
      });
    } catch (error) {
      throw new HttpException(
        {
          message: 'Ocorreu um erro ao remover o gato.',
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
