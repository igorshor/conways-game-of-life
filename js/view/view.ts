/// <reference path="../_references.d.ts" />

module GameOfLife.View {
    import NewController = GameOfLife.Controller.Controller;
    import Controller = GameOfLife.Controller.Controller;
    import Model = GameOfLife.Model.Model;
    import AliveState = GameOfLife.Model.AliveState;
    import DeadState = GameOfLife.Model.DeadState;
    import CellStateChangedEventArgs = GameOfLife.Model.CellChangedEventArgs;

    export class View {
        public rows:number;
        public cols:number;

        private model:Model;

        private container:JQuery;
        private cells:JQuery[][];
        private generationCount:JQuery;

        public nextClicked = new Event<void>();
        public startClicked = new Event<void>();
        public stopClicked = new Event<void>();
        public resetClicked = new Event<void>();

        constructor(rows:number, cols:number, model) {
            this.rows = rows;
            this.cols = cols;
            this.model = model;

            this.attachEvents();
            this.setViewComponents();
            this.initGame();
        }

        private setViewComponents():void {
            this.generationCount = $('#generation');
            this.container = $('#cells');
            this.setButtonsEvents();
        }

        private setButtonsEvents():void {
            $('#next').click(()=> { this.nextClicked.notify(); });
            $('#start').click(()=> { this.startClicked.notify(); });
            $('#stop').click(()=> { this.stopClicked.notify(); });
            $('#reset').click(()=> { this.resetClicked.notify(); });
        }

        private attachEvents() {
            this.model.board.cellChanged.attach(this.onCellStatusChange);
            this.model.board.generationChanged.attach(this.onGenerationChange);
        }

        private initGame():void {
            this.cells = [];
            MatrixHelper.initMatrix(this.rows, this.cols, this.cells, (i, j)=> {this.createCell(i, j)});
            this.generationCount.text(0);
        }

        private createCell:(row:number, col:number)=> void = (i, j)=> {
            var cell = $('<div class="cell dead"></div>');
            this.cells[i][j] = cell;
            this.container.append(cell);
        };

        private onGenerationChange:(generatiob:number)=>void = (generatiob:number)=> {
            this.generationCount.text(generatiob);
        };

        private onCellStatusChange:(args:CellStateChangedEventArgs)=> void = (args:CellStateChangedEventArgs)=> {
            var cell:JQuery = this.cells[args.row][args.col];
            var classToAdd:string = args.state.identifier;
            var classToRemove:string = classToAdd === AliveState.identifier ? DeadState.identifier : AliveState.identifier;

            if (!cell.hasClass(classToAdd)) {
                cell.addClass(classToAdd);
            }
            if (cell.hasClass(classToRemove)) {
                cell.removeClass(classToRemove);
            }
        };
    }
}