/// <reference path="_references.d.ts" />

module GameOfLife {
    import Controller = GameOfLife.Controller.Controller;
    import Model = GameOfLife.Model.Model;
    import View = GameOfLife.View.View;

    var rows = 40;
    var cols = rows;
    var model:Model = new Model(rows, cols);
    var view:View = new View(rows, cols, model);

    export var gameOfLife:Controller = new Controller(view, model);
}