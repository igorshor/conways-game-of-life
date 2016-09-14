/// <reference path="../../_references.d.ts" />

module GameOfLife.Model {
    export interface IState {
        identifier:string;
        getNextState(cell:ICell):IState;
    }

}