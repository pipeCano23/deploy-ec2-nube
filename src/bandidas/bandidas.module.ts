import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bandidas } from './entity';
import { BandidasService } from './bandidas.service';
import { BandidasController } from './bandidas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bandidas])],
  providers: [BandidasService],
  controllers: [BandidasController],
})
export class BandidasModule {}
