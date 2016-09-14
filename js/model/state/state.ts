/// <reference path="../../_references.d.ts" />

module GameOfLife.Model {

    export class State {
        public identifier:string;

        constructor(identifier:string) { this.identifier = identifier; }

        public getAliveNeighborsCount(cell:ICell):number {
            var counter = 0;
            var neighbors:ICell[] = cell.getDependencies();
            for (var i = 0; i < neighbors.length; i++) {
                if (neighbors[i].state.identifier === AliveState.identifier) {
                    counter++;
                }
            }

            return counter;
        }
    }
}