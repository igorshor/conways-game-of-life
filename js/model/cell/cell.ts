/// <reference path="../../_references.d.ts" />

module GameOfLife.Model {
    export class Cell implements ICell {
        private currentState:IState;
        private nextState:IState;
        private neighbors:ICell[];

        public row:number;
        public col:number;

        get state():IState { return this.currentState; }

        set state(value:IState) { this.currentState = value; }

        constructor(row:number, col:number) {
            this.col = col;
            this.row = row;
            this.currentState = new DeadState();
        }

        public setDependencies(neighbors:Cell[]):void {
            this.neighbors = neighbors;
        }

        public getDependencies():ICell[] {
            return this.neighbors;
        }

        public nextStep():void {
            this.nextState = this.currentState.getNextState(this);
        }

        public updateState():boolean {
            var changed = this.currentState.identifier !== this.nextState.identifier;

            if (changed) {
                this.currentState = this.nextState;
            }

            this.nextState = null;

            return changed;
        }
    }
}
