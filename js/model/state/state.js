/// <reference path="../../_references.d.ts" />
var GameOfLife;
(function (GameOfLife) {
    var Model;
    (function (Model) {
        var State = (function () {
            function State(identifier) {
                this.identifier = identifier;
            }
            State.prototype.getAliveNeighborsCount = function (cell) {
                var counter = 0;
                var neighbors = cell.getDependencies();
                for (var i = 0; i < neighbors.length; i++) {
                    if (neighbors[i].state.identifier === Model.AliveState.identifier) {
                        counter++;
                    }
                }
                return counter;
            };
            return State;
        })();
        Model.State = State;
    })(Model = GameOfLife.Model || (GameOfLife.Model = {}));
})(GameOfLife || (GameOfLife = {}));
//# sourceMappingURL=state.js.map