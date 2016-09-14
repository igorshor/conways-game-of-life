/// <reference path="../../_references.d.ts" />

module GameOfLife.Model {
    export class Board implements IBoard {
        private cells:ICell[][];

        public generation:number = 0;
        public cellChanged:Event<CellChangedEventArgs> = new Event<CellChangedEventArgs>();
        public generationChanged:Event<number> = new Event<number>();

        constructor(public rows:number, public cols:number) {
            this.cells = this.createBoard();
        }

        private createBoard():ICell[][] {
            var cells:Cell[][] = [];

            MatrixHelper.initMatrix(this.rows, this.cols, cells, (i, j)=> { cells[i][j] = new Cell(i, j); });
            MatrixHelper.iterateMatrix(this.rows, this.cols, (i, j)=> { cells[i][j].setDependencies(this.findCellNeighbors(cells, i, j)); });

            return cells;
        }

        public updateCellState(row:number, col:number, state:IState):void {
            this.cells[row][col].state = state;
            this.cellChanged.notify(new CellChangedEventArgs(row, col, state));
        }

        public getNextStep():void {
            MatrixHelper.iterateMatrix(this.rows, this.cols, (i, j)=> { this.cells[i][j].nextStep(); });
            MatrixHelper.iterateMatrix(this.rows, this.cols, (i, j)=> { this.updateCell(i, j); });

            this.generation++;
            this.generationChanged.notify(this.generation);
        }

        private updateCell:(row:number, col:number)=> void = (i, j)=> {
            var cell:ICell = this.cells[i][j];
            var changed:boolean = cell.updateState();
            if (changed) {
                this.cellChanged.notify(new CellChangedEventArgs(i, j, cell.state));
            }
        };

        public resetGame():void {
            MatrixHelper.iterateMatrix(this.rows, this.cols, (i, j)=> {this.updateCellState(i, j, new DeadState())});
            this.generation = 0;
            this.generationChanged.notify(this.generation);
        }

        private findCellNeighbors(cells:ICell[][], row:number, col:number):Cell[] {
            var cellNeighbors = [];

            var rowMinIndex = row - 1 < 0 ? 0 : row - 1;
            var rowMaxIndex = row + 1 > this.rows - 1 ? this.rows - 1 : row + 1;
            var colMinIndex = col - 1 < 0 ? 0 : col - 1;
            var colMaxIndex = col + 1 > this.cols - 1 ? this.cols - 1 : col + 1;

            for (var i:number = rowMinIndex; i <= rowMaxIndex; i++) {
                for (var j:number = colMinIndex; j <= colMaxIndex; j++) {
                    if (i !== row || j !== col) {
                        cellNeighbors.push(cells[i][j]);
                    }
                }
            }

            return cellNeighbors;
        }
    }
}