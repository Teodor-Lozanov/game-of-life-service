import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './application/game.service';

@Module({
  imports: [],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
