import { CellState } from '../domain/types/cell-state.type';
import { InitialSeedGridResponseDto } from '../dto/initial-seed-grid-response.dto';

export const toInitialSeedGridResponseDto = (
  grid: CellState[][],
): InitialSeedGridResponseDto => ({
  rows: grid.map((row) => ({
    cellsState: row,
  })),
});
