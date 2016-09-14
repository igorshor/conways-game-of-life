/// <reference path="../../_references.d.ts" />
var GameOfLife;
(function (GameOfLife) {
    var Model;
    (function (Model) {
        var CellChangedEventArgs = (function () {
            function CellChangedEventArgs(row, col, state) {
                this.row = row;
                this.col = col;
                this.state = state;
            }
            return CellChangedEventArgs;
        })();
        Model.CellChangedEventArgs = CellChangedEventArgs;
    })(Model = GameOfLife.Model || (GameOfLife.Model = {}));
})(GameOfLife || (GameOfLife = {}));
//# sourceMappingURL=cell-changed-event-args.js.map