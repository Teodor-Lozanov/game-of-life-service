import { Controller, Get } from '@nestjs/common';
import { GameService } from './application/game.service';
import { toInitialSeedGridResponseDto } from './mapper/game.mapper';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  getInitialSeed() {
    const grid = this.gameService.getInitialSeed();
    return toInitialSeedGridResponseDto(grid);
  }
}
