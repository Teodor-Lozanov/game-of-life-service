import { CellState } from '../types/cell-state.type';

export const computeRandomCellState = (): CellState =>
  Math.random() < 0.5 ? 0 : 1;

export const createRandomInitialGrid = (
  rowsCount: number,
  columnsCount: number,
): CellState[][] => {
  const grid: CellState[][] = [];

  for (let i = 0; i < rowsCount; i++) {
    grid[i] = [];
    for (let k = 0; k < columnsCount; k++) {
      grid[i].push(computeRandomCellState());
    }
  }

  return grid;
};
