/// <reference path="../../_references.d.ts" />

module GameOfLife.Model {
    export class CellChangedEventArgs {
        constructor(public row:number, public col:number, public state:IState) { }
    }
}