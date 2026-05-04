import { Test, TestingModule } from '@nestjs/testing';
import { GameController } from './game.controller';
import { GameService } from './application/game.service';
import { CellState } from './domain/types/cell-state.type';

describe('GameController', () => {
  let controller: GameController;

  const gameServiceMock = {
    getInitialSeed: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameController],
      providers: [
        {
          provide: GameService,
          useValue: gameServiceMock,
        },
      ],
    }).compile();

    controller = module.get<GameController>(GameController);
  });

  afterEach(() => {
    gameServiceMock.getInitialSeed.mockReset();
  });

  it('returns the initial grid seed response dto', () => {
    const grid: CellState[][] = [
      [0, 1],
      [1, 1],
    ];
    gameServiceMock.getInitialSeed.mockReturnValue(grid);

    const result = controller.getInitialSeed();

    expect(gameServiceMock.getInitialSeed).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      rows: [{ cellsState: [0, 1] }, { cellsState: [1, 1] }],
    });
  });
});
