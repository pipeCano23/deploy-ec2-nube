import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bandidas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  eso_va: boolean;
}
