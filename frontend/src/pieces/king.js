import Piece from './pieces';

export default class King extends Piece {
  constructor(player) {
    super(player, (player === 1 ? "black" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
  }
}