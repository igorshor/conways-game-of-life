/// <reference path="../_references.d.ts" />
var GameOfLife;
(function (GameOfLife) {
    var MatrixHelper = (function () {
        function MatrixHelper() {
        }
        MatrixHelper.iterateMatrix = function (rows, cols, action) {
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    action(i, j);
                }
            }
        };
        MatrixHelper.initMatrix = function (rows, cols, mat, action) {
            mat = mat || [];
            for (var i = 0; i < rows; i++) {
                mat[i] = [];
                for (var j = 0; j < cols; j++) {
                    mat[i][j] = [];
                    action(i, j);
                }
            }
            return mat;
        };
        return MatrixHelper;
    })();
    GameOfLife.MatrixHelper = MatrixHelper;
})(GameOfLife || (GameOfLife = {}));
//# sourceMappingURL=matrix-helper.js.map