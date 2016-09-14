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
        var AliveState = (function (_super) {
            __extends(AliveState, _super);
            function AliveState() {
                _super.call(this, AliveState.identifier);
            }
            AliveState.prototype.getNextState = function (cell) {
                var aliveNeighbors = _super.prototype.getAliveNeighborsCount.call(this, cell);
                return (aliveNeighbors === 3 || aliveNeighbors === 2) ? this : new Model.DeadState();
            };
            AliveState.identifier = 'alive';
            return AliveState;
        })(Model.State);
        Model.AliveState = AliveState;
    })(Model = GameOfLife.Model || (GameOfLife.Model = {}));
})(GameOfLife || (GameOfLife = {}));
//# sourceMappingURL=alive-state.js.map