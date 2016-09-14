/// <reference path="../_references.d.ts" />

module GameOfLife {
    export class MatrixHelper {
        public static iterateMatrix(rows:number, cols:number, action:(i:number, j:number)=>void):void {
            for (var i:number = 0; i < rows; i++) {
                for (var j:number = 0; j < cols; j++) {
                    action(i, j);
                }
            }
        }

        public static initMatrix(rows:number, cols:number, mat:any[][], action:(i:number, j:number)=>void):any[][] {
            mat = mat || [];

            for (var i:number = 0; i < rows; i++) {
                mat[i] = [];
                for (var j:number = 0; j < cols; j++) {
                    mat[i][j] = [];
                    action(i, j);
                }
            }

            return mat;
        }
    }
}