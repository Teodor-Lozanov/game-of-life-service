import { CellState } from '../domain/types/cell-state.type';
import { toInitialSeedGridResponseDto } from './game.mapper';

describe('toInitialSeedGridResponseDto', () => {
  it('maps a cell state grid to dto', () => {
    const grid: CellState[][] = [
      [0, 1, 1],
      [1, 1, 1],
    ];

    const result = toInitialSeedGridResponseDto(grid);

    expect(result).toEqual({
      rows: [{ cellsState: [0, 1, 1] }, { cellsState: [1, 1, 1] }],
    });
  });

  it('maps an empty cell state grid to dto', () => {
    const result = toInitialSeedGridResponseDto([]);
    expect(result).toEqual({
      rows: [],
    });
  });
});
