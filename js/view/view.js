/// <reference path="../_references.d.ts" />
var GameOfLife;
(function (GameOfLife) {
    var View;
    (function (View_1) {
        var AliveState = GameOfLife.Model.AliveState;
        var DeadState = GameOfLife.Model.DeadState;
        var View = (function () {
            function View(rows, cols, model) {
                var _this = this;
                this.nextClicked = new GameOfLife.Event();
                this.startClicked = new GameOfLife.Event();
                this.stopClicked = new GameOfLife.Event();
                this.resetClicked = new GameOfLife.Event();
                this.createCell = function (i, j) {
                    var cell = $('<div class="cell dead"></div>');
                    _this.cells[i][j] = cell;
                    _this.container.append(cell);
                };
                this.onGenerationChange = function (generatiob) {
                    _this.generationCount.text(generatiob);
                };
                this.onCellStatusChange = function (args) {
                    var cell = _this.cells[args.row][args.col];
                    var classToAdd = args.state.identifier;
                    var classToRemove = classToAdd === AliveState.identifier ? DeadState.identifier : AliveState.identifier;
                    if (!cell.hasClass(classToAdd)) {
                        cell.addClass(classToAdd);
                    }
                    if (cell.hasClass(classToRemove)) {
                        cell.removeClass(classToRemove);
                    }
                };
                this.rows = rows;
                this.cols = cols;
                this.model = model;
                this.attachEvents();
                this.setViewComponents();
                this.initGame();
            }
            View.prototype.setViewComponents = function () {
                this.generationCount = $('#generation');
                this.container = $('#cells');
                this.setButtonsEvents();
            };
            View.prototype.setButtonsEvents = function () {
                var _this = this;
                $('#next').click(function () { _this.nextClicked.notify(); });
                $('#start').click(function () { _this.startClicked.notify(); });
                $('#stop').click(function () { _this.stopClicked.notify(); });
                $('#reset').click(function () { _this.resetClicked.notify(); });
            };
            View.prototype.attachEvents = function () {
                this.model.board.cellChanged.attach(this.onCellStatusChange);
                this.model.board.generationChanged.attach(this.onGenerationChange);
            };
            View.prototype.initGame = function () {
                var _this = this;
                this.cells = [];
                GameOfLife.MatrixHelper.initMatrix(this.rows, this.cols, this.cells, function (i, j) { _this.createCell(i, j); });
                this.generationCount.text(0);
            };
            return View;
        })();
        View_1.View = View;
    })(View = GameOfLife.View || (GameOfLife.View = {}));
})(GameOfLife || (GameOfLife = {}));
//# sourceMappingURL=view.js.map