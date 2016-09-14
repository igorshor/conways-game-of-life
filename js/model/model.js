/// <reference path="../_references.d.ts" />
var GameOfLife;
(function (GameOfLife) {
    var Model;
    (function (Model_1) {
        var Model = (function () {
            function Model(rows, cols) {
                var _this = this;
                this.doMove = function () {
                    _this.board.getNextStep();
                };
                this.rows = rows;
                this.cols = cols;
                this.board = new Model_1.Board(this.rows, this.cols);
                this.initInterval();
            }
            Model.prototype.initInterval = function () {
                this.intervalFrequency = 100;
                this.interval = 0;
            };
            Model.prototype.setInterval = function () {
                if (this.interval < 1) {
                    this.interval = setInterval(this.doMove, this.intervalFrequency);
                }
            };
            Model.prototype.resetInterval = function () {
                if (this.interval > 0) {
                    clearInterval(this.interval);
                    this.interval = 0;
                }
            };
            Model.prototype.resetGame = function () {
                this.resetInterval();
                this.board.resetGame();
            };
            return Model;
        })();
        Model_1.Model = Model;
    })(Model = GameOfLife.Model || (GameOfLife.Model = {}));
})(GameOfLife || (GameOfLife = {}));
//# sourceMappingURL=model.js.map