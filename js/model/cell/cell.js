/// <reference path="../../_references.d.ts" />
var GameOfLife;
(function (GameOfLife) {
    var Model;
    (function (Model) {
        var Cell = (function () {
            function Cell(row, col) {
                this.col = col;
                this.row = row;
                this.currentState = new Model.DeadState();
            }
            Object.defineProperty(Cell.prototype, "state", {
                get: function () { return this.currentState; },
                set: function (value) { this.currentState = value; },
                enumerable: true,
                configurable: true
            });
            Cell.prototype.setDependencies = function (neighbors) {
                this.neighbors = neighbors;
            };
            Cell.prototype.getDependencies = function () {
                return this.neighbors;
            };
            Cell.prototype.nextStep = function () {
                this.nextState = this.currentState.getNextState(this);
            };
            Cell.prototype.updateState = function () {
                var changed = this.currentState.identifier !== this.nextState.identifier;
                if (changed) {
                    this.currentState = this.nextState;
                }
                this.nextState = null;
                return changed;
            };
            return Cell;
        })();
        Model.Cell = Cell;
    })(Model = GameOfLife.Model || (GameOfLife.Model = {}));
})(GameOfLife || (GameOfLife = {}));
//# sourceMappingURL=cell.js.map