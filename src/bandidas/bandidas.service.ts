import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bandidas } from './entity';

@Injectable()
export class BandidasService {
  constructor(
    @InjectRepository(Bandidas)
    private bandidasRepository: Repository<Bandidas>,
  ) {}

  findAll(): Promise<Bandidas[]> {
    return this.bandidasRepository.find();
  }

  async findOne(id: number): Promise<Bandidas> {
    const found = await this.bandidasRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException('Not found Bandida ' + id);
    }
    return found;
  }

  create(bandidas: Bandidas): Promise<Bandidas> {
    return this.bandidasRepository.save(bandidas);
  }

  async update(id: number, bandidas: Bandidas): Promise<void> {
    await this.findOne(id);
    await this.bandidasRepository.update(id, bandidas);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.bandidasRepository.delete(id);
  }
}
