import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createRandomInitialGrid } from '../domain/grid/grid';

@Injectable()
export class GameService {
  constructor(private configService: ConfigService) {}

  getInitialSeed() {
    const rows = this.configService.get<number>('game.gridRows');
    const columns = this.configService.get<number>('game.gridColumns');

    if (rows == null || columns == null) {
      throw new Error('Game grid dimensions are not loaded.');
    }

    const grid = createRandomInitialGrid(rows, columns);

    return grid;
  }
}
