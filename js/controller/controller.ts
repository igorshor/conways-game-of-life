/// <reference path="../_references.d.ts" />

module GameOfLife.Controller {
    import View = GameOfLife.View.View;
    import Model = GameOfLife.Model.Model;
    import CellStateChangedEventArgs = GameOfLife.Model.CellChangedEventArgs;
    import AliveState = GameOfLife.Model.AliveState;

    export class Controller {
        private view:View;
        private model:Model;

        constructor(view:View, model:Model) {
            this.view = view;
            this.model = model;
            this.setStartState();
            this.attachEvents();
        }

        private attachEvents() {
            this.view.nextClicked.attach(()=> { this.model.doMove(); });
            this.view.startClicked.attach(()=> { this.model.setInterval(); });
            this.view.stopClicked.attach(()=> { this.model.resetInterval(); });
            this.view.resetClicked.attach(()=> { this.startNewGame(); });
        }

        startNewGame = ()=> {
            this.model.resetGame();
            this.setStartState();
        };

        private setStartState():void {
            this.model.board.updateCellState(6, 15, new AliveState());
            this.model.board.updateCellState(6, 16, new AliveState());
            this.model.board.updateCellState(6, 17, new AliveState());
            this.model.board.updateCellState(6, 18, new AliveState());
            this.model.board.updateCellState(6, 19, new AliveState());
            this.model.board.updateCellState(6, 20, new AliveState());
            this.model.board.updateCellState(6, 21, new AliveState());
            this.model.board.updateCellState(6, 22, new AliveState());
            this.model.board.updateCellState(6, 23, new AliveState());
            this.model.board.updateCellState(6, 24, new AliveState());

            this.model.board.updateCellState(18, 18, new AliveState());
            this.model.board.updateCellState(18, 19, new AliveState());
            this.model.board.updateCellState(18, 20, new AliveState());
            this.model.board.updateCellState(18, 21, new AliveState());
            this.model.board.updateCellState(19, 19, new AliveState());
            this.model.board.updateCellState(19, 20, new AliveState());
            this.model.board.updateCellState(19, 21, new AliveState());
            this.model.board.updateCellState(20, 19, new AliveState());
            this.model.board.updateCellState(20, 20, new AliveState());
            this.model.board.updateCellState(20, 21, new AliveState());
            this.model.board.updateCellState(21, 19, new AliveState());
            this.model.board.updateCellState(21, 20, new AliveState());
            this.model.board.updateCellState(21, 21, new AliveState());
        }
    }
}