/// <reference path="../_references.d.ts" />

module GameOfLife {
    export class Event<T> {
        private listeners:((args?:T)=> void)[] = [];

        public attach(callback:(args:T)=>void) {
            this.listeners.push(callback);
        }

        public detach(callback:(args?:T)=>void) {
            var index = this.listeners.indexOf(callback);

            if (index > -1) {
                this.listeners.splice(index, 1);
            }
        }

        public notify(args?:T):void {
            for (var i = 0; i < this.listeners.length; i++) {
                this.listeners[i](args);
            }
        }
    }
}