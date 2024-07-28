import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bandidas } from './bandidas/entity';
import { BandidasController } from './bandidas/bandidas.controller';
import { BandidasService } from './bandidas/bandidas.service';
import { config } from './config';

console.log(config)

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      ...config.database,
      entities: [Bandidas],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Bandidas]),
  ],
  controllers: [AppController, BandidasController],
  providers: [AppService, BandidasService],
})
export class AppModule {}
