/// <reference path="../_references.d.ts" />

module GameOfLife.Model {
    export class Model {
        private intervalFrequency:number;
        private interval:number;

        public board:IBoard;
        public rows:number;
        public cols:number;

        constructor(rows:number, cols:number) {
            this.rows = rows;
            this.cols = cols;

            this.board = new Board(this.rows, this.cols);
            this.initInterval();
        }

        private initInterval():void {
            this.intervalFrequency = 100;
            this.interval = 0;
        }

        public setInterval():void {
            if (this.interval < 1) {
                this.interval = setInterval(this.doMove, this.intervalFrequency);
            }
        }

        public resetInterval():void {
            if (this.interval > 0) {
                clearInterval(this.interval);
                this.interval = 0;
            }
        }

        public doMove:()=>void = ()=> {
            this.board.getNextStep();
        };

        public resetGame() {
            this.resetInterval();
            this.board.resetGame();
        }
    }
}