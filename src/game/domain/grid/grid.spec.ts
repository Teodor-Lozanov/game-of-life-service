import { computeRandomCellState, createRandomInitialGrid } from './grid';

describe('computeRandomCellState', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns 0 when Math.random is below 0.5', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.49);

    expect(computeRandomCellState()).toBe(0);
  });

  it('returns 1 when Math.random is greater than or equal to 0.5', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.5);

    expect(computeRandomCellState()).toBe(1);
  });
});

describe('createRandomInitialGrid', () => {
  it('creates a grid with a given row and column count', () => {
    const result = createRandomInitialGrid(2, 2);

    expect(result.length).toBe(2);
    expect(result[0].length).toBe(2);
    expect(result[1].length).toBe(2);
  });
});
