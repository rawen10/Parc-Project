import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './create-reservation.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService) {}

  async create(createReservationDto: CreateReservationDto) {
    await this.prisma.reservation.create({
      data: createReservationDto,
    });
    return 'Réservation créée avec succès';
  }

  async findAll() {
    return this.prisma.reservation.findMany();
  }
}
