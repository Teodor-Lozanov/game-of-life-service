import { Module } from '@nestjs/common';

import { GameModule } from './game/game.module';
import { ConfigModule } from '@nestjs/config';
import gameConfig from './core/config/game.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [gameConfig],
    }),
    GameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
