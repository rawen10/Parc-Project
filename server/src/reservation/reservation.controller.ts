import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { CreateReservationDto } from './create-reservation.dto';
import { ReservationService } from './reservation.service';
import { ApiTags } from '@nestjs/swagger';


@Controller('reservation')
@ApiTags('Reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.create(createReservationDto);
  }

  @Get()
  findAll() {
    return this.reservationService.findAll();
  }
  // @Patch('accept/:id')
  // async acceptReservation(@Param('id') id: number) {
  //   return this.reservationService.acceptReservation(Number(id));
  // }
}

