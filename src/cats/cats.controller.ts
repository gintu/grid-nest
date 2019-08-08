import { Controller, Get, Req, Post, Put, Delete, Body, Param } from '@nestjs/common';
import {CatsDto} from './dto/cats.dto';

@Controller('cats')
export class CatsController {
    @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  create( @Body() catsDto: CatsDto): string {
      return `this is ${catsDto.name}`;
  }

  @Get(':id')
  findOne( @Param () params): string {
      return `this is ${params.id}` ;
  }
  @Put(':id')
  update(): string {
      return 'updated';
  }
}
