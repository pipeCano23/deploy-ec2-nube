import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BandidasService } from './bandidas.service';
import { Bandidas } from './entity';

@Controller('bandidas')
export class BandidasController {
  constructor(private readonly bandidasService: BandidasService) {}

  @Get()
  findAll(): Promise<Bandidas[]> {
    return this.bandidasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Bandidas> {
    return this.bandidasService.findOne(+id);
  }

  @Post()
  create(@Body() bandidas: Bandidas): Promise<Bandidas> {
    return this.bandidasService.create(bandidas);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() bandidas: Bandidas): Promise<void> {
    return this.bandidasService.update(+id, bandidas);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.bandidasService.remove(+id);
  }
}
