/// <reference path="../_references.d.ts" />
var GameOfLife;
(function (GameOfLife) {
    var Event = (function () {
        function Event() {
            this.listeners = [];
        }
        Event.prototype.attach = function (callback) {
            this.listeners.push(callback);
        };
        Event.prototype.detach = function (callback) {
            var index = this.listeners.indexOf(callback);
            if (index > -1) {
                this.listeners.splice(index, 1);
            }
        };
        Event.prototype.notify = function (args) {
            for (var i = 0; i < this.listeners.length; i++) {
                this.listeners[i](args);
            }
        };
        return Event;
    })();
    GameOfLife.Event = Event;
})(GameOfLife || (GameOfLife = {}));
//# sourceMappingURL=event.js.map