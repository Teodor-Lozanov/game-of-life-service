export default () => ({
  game: {
    gridRows: parseInt(process.env.GAME_GRID_ROWS ?? '95', 10),
    gridColumns: parseInt(process.env.GAME_GRID_COLUMNS ?? '185', 10),
  },
});
