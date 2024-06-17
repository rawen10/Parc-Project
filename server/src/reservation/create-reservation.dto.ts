import { IsEmail } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateReservationDto {
  @ApiProperty()
  nameprenom:string
  @ApiProperty()
  @IsEmail()
  email:string
  @ApiProperty()
  numero:string
  @ApiProperty()
  age:string
  @ApiProperty()
  sexe:string
  @ApiProperty()
  date:string
  @ApiProperty()
  pays:string
  @ApiProperty()
  status?:string
}

