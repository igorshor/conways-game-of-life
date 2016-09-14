/// <reference path="../../_references.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameOfLife;
(function (GameOfLife) {
    var Model;
    (function (Model) {
        var DeadState = (function (_super) {
            __extends(DeadState, _super);
            function DeadState() {
                _super.call(this, DeadState.identifier);
            }
            DeadState.prototype.getNextState = function (cell) {
                var aliveNeighbors = _super.prototype.getAliveNeighborsCount.call(this, cell);
                return aliveNeighbors === 3 ? new Model.AliveState() : this;
            };
            DeadState.identifier = 'dead';
            return DeadState;
        })(Model.State);
        Model.DeadState = DeadState;
    })(Model = GameOfLife.Model || (GameOfLife.Model = {}));
})(GameOfLife || (GameOfLife = {}));
//# sourceMappingURL=dead-state.js.map