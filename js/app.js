/// <reference path="_references.d.ts" />
var GameOfLife;
(function (GameOfLife) {
    var Controller = GameOfLife.Controller.Controller;
    var Model = GameOfLife.Model.Model;
    var View = GameOfLife.View.View;
    var rows = 40;
    var cols = rows;
    var model = new Model(rows, cols);
    var view = new View(rows, cols, model);
    GameOfLife.gameOfLife = new Controller(view, model);
})(GameOfLife || (GameOfLife = {}));
//# sourceMappingURL=app.js.map