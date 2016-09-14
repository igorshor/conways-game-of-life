/// <reference path="../../_references.d.ts" />

module GameOfLife.Model {
    export interface ICell {
        state:IState
        getDependencies():ICell[];
        nextStep():void;
        updateState():boolean;
    }
}