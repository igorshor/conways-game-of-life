/// <reference path="../../_references.d.ts" />

module GameOfLife.Model {
    export interface IBoard {
        cellChanged:Event<CellChangedEventArgs>;
        generationChanged:Event<number>;
        updateCellState(row:number, col:number, state:IState);
        getNextStep():void;
        resetGame():void;
    }
}
