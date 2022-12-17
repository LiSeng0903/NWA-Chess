# P2P CP
回傳資料：8*8 的陣列，每一格是一個 object

| attribute | meaning    | data type |
|-----------|------------|-----------|
|type       |棋子的種類    | str       |
|color      |棋子的顏色    | str       |
|ava        |可以 / 不行走 | bool      |

## type 
| str      | 棋子    | 
|----------|--------|
| nothing  | 沒有棋子 |
| pawn     | 小兵    |
| bishop   | 主教    |
| rook     | 城堡    |
| knight   | 馬頭    |
| king     | 王      |
| queen    | 后      |

## color 
| str | 顏色 |
|-----|-----|
| b   | 黑色 |
| w   | 白色 |

## ava 
| bool | 意義    | 
|------|--------|
| true | 可走    | 
| false | 不可走 |