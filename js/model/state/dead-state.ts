/// <reference path="../../_references.d.ts" />

module GameOfLife.Model {
    export class DeadState extends State implements IState {
        public static identifier:string = 'dead';

        constructor() { super(DeadState.identifier); }

        public getNextState(cell:ICell):IState {
            var aliveNeighbors = super.getAliveNeighborsCount(cell);

            return aliveNeighbors === 3 ? new AliveState() : this;
        }
    }
}