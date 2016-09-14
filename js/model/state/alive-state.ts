/// <reference path="../../_references.d.ts" />

module GameOfLife.Model {
    export class AliveState extends State implements IState {
        public static identifier:string = 'alive';

        constructor() { super(AliveState.identifier); }

        public getNextState(cell:ICell):IState {
            var aliveNeighbors = super.getAliveNeighborsCount(cell);

            return (aliveNeighbors === 3 || aliveNeighbors === 2) ? this : new DeadState();
        }
    }
}