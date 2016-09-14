/// <reference path="../../_references.d.ts" />
var GameOfLife;
(function (GameOfLife) {
    var Model;
    (function (Model) {
        var Board = (function () {
            function Board(rows, cols) {
                var _this = this;
                this.rows = rows;
                this.cols = cols;
                this.generation = 0;
                this.cellChanged = new GameOfLife.Event();
                this.generationChanged = new GameOfLife.Event();
                this.updateCell = function (i, j) {
                    var cell = _this.cells[i][j];
                    var changed = cell.updateState();
                    if (changed) {
                        _this.cellChanged.notify(new Model.CellChangedEventArgs(i, j, cell.state));
                    }
                };
                this.cells = this.createBoard();
            }
            Board.prototype.createBoard = function () {
                var _this = this;
                var cells = [];
                GameOfLife.MatrixHelper.initMatrix(this.rows, this.cols, cells, function (i, j) { cells[i][j] = new Model.Cell(i, j); });
                GameOfLife.MatrixHelper.iterateMatrix(this.rows, this.cols, function (i, j) { cells[i][j].setDependencies(_this.findCellNeighbors(cells, i, j)); });
                return cells;
            };
            Board.prototype.updateCellState = function (row, col, state) {
                this.cells[row][col].state = state;
                this.cellChanged.notify(new Model.CellChangedEventArgs(row, col, state));
            };
            Board.prototype.getNextStep = function () {
                var _this = this;
                GameOfLife.MatrixHelper.iterateMatrix(this.rows, this.cols, function (i, j) { _this.cells[i][j].nextStep(); });
                GameOfLife.MatrixHelper.iterateMatrix(this.rows, this.cols, function (i, j) { _this.updateCell(i, j); });
                this.generation++;
                this.generationChanged.notify(this.generation);
            };
            Board.prototype.resetGame = function () {
                var _this = this;
                GameOfLife.MatrixHelper.iterateMatrix(this.rows, this.cols, function (i, j) { _this.updateCellState(i, j, new Model.DeadState()); });
                this.generation = 0;
                this.generationChanged.notify(this.generation);
            };
            Board.prototype.findCellNeighbors = function (cells, row, col) {
                var cellNeighbors = [];
                var rowMinIndex = row - 1 < 0 ? 0 : row - 1;
                var rowMaxIndex = row + 1 > this.rows - 1 ? this.rows - 1 : row + 1;
                var colMinIndex = col - 1 < 0 ? 0 : col - 1;
                var colMaxIndex = col + 1 > this.cols - 1 ? this.cols - 1 : col + 1;
                for (var i = rowMinIndex; i <= rowMaxIndex; i++) {
                    for (var j = colMinIndex; j <= colMaxIndex; j++) {
                        if (i !== row || j !== col) {
                            cellNeighbors.push(cells[i][j]);
                        }
                    }
                }
                return cellNeighbors;
            };
            return Board;
        })();
        Model.Board = Board;
    })(Model = GameOfLife.Model || (GameOfLife.Model = {}));
})(GameOfLife || (GameOfLife = {}));
//# sourceMappingURL=board.js.map