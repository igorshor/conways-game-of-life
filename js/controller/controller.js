/// <reference path="../_references.d.ts" />
var GameOfLife;
(function (GameOfLife) {
    var Controller;
    (function (Controller_1) {
        var AliveState = GameOfLife.Model.AliveState;
        var Controller = (function () {
            function Controller(view, model) {
                var _this = this;
                this.startNewGame = function () {
                    _this.model.resetGame();
                    _this.setStartState();
                };
                this.view = view;
                this.model = model;
                this.setStartState();
                this.attachEvents();
            }
            Controller.prototype.attachEvents = function () {
                var _this = this;
                this.view.nextClicked.attach(function () { _this.model.doMove(); });
                this.view.startClicked.attach(function () { _this.model.setInterval(); });
                this.view.stopClicked.attach(function () { _this.model.resetInterval(); });
                this.view.resetClicked.attach(function () { _this.startNewGame(); });
            };
            Controller.prototype.setStartState = function () {
                this.model.board.updateCellState(6, 15, new AliveState());
                this.model.board.updateCellState(6, 16, new AliveState());
                this.model.board.updateCellState(6, 17, new AliveState());
                this.model.board.updateCellState(6, 18, new AliveState());
                this.model.board.updateCellState(6, 19, new AliveState());
                this.model.board.updateCellState(6, 20, new AliveState());
                this.model.board.updateCellState(6, 21, new AliveState());
                this.model.board.updateCellState(6, 22, new AliveState());
                this.model.board.updateCellState(6, 23, new AliveState());
                this.model.board.updateCellState(6, 24, new AliveState());
                this.model.board.updateCellState(18, 18, new AliveState());
                this.model.board.updateCellState(18, 19, new AliveState());
                this.model.board.updateCellState(18, 20, new AliveState());
                this.model.board.updateCellState(18, 21, new AliveState());
                this.model.board.updateCellState(19, 19, new AliveState());
                this.model.board.updateCellState(19, 20, new AliveState());
                this.model.board.updateCellState(19, 21, new AliveState());
                this.model.board.updateCellState(20, 19, new AliveState());
                this.model.board.updateCellState(20, 20, new AliveState());
                this.model.board.updateCellState(20, 21, new AliveState());
                this.model.board.updateCellState(21, 19, new AliveState());
                this.model.board.updateCellState(21, 20, new AliveState());
                this.model.board.updateCellState(21, 21, new AliveState());
            };
            return Controller;
        })();
        Controller_1.Controller = Controller;
    })(Controller = GameOfLife.Controller || (GameOfLife.Controller = {}));
})(GameOfLife || (GameOfLife = {}));
//# sourceMappingURL=controller.js.map