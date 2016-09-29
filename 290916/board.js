// var board = [['# # # # # # # #'],
//               [' # # # # # # # #'],
//               ['# # # # # # # #'],
//               [' # # # # # # # #']];
//
//               console.log(board[0].toString());
//               console.log(board[1].toString());
//               console.log(board[2].toString());
//               console.log(board[3].toString());
var symbol = '$';

var board  = {
  array:  [[symbol + ' '],
          [' ' + symbol]],
  columns: 8,
  rows: 2
};

for (var j = 0; j < board.rows; j++) {
  for (var i = 0; i < board.array.length; i++) {
    var string = board.array[i].toString();
    console.log(string.repeat(board.columns));
  }
}
