import { Controller } from '@nestjs/common';
import { GymLidersService } from './gym-liders.service';

@Controller('gym-liders')
export class GymLidersController {
  constructor(private readonly gymLidersService: GymLidersService) {}
}
