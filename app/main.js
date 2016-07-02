"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var forms_1 = require('@angular/forms');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var TodoClass = (function () {
    function TodoClass() {
        this.todos = new Subject_1.Subject();
        this.localarray = [];
    }
    TodoClass.prototype.onSubmit = function () {
        this.localarray.push(this.comingtask);
        this.todos.next(this.localarray);
    };
    TodoClass = __decorate([
        core_1.Component({
            selector: 'todo',
            template: "\n    <h1>Todo List</h1>\n    \n    <div *ngFor=\"let task of todos | async\">\n        {{ task }} \n    </div>\n    \n    <form  (ngSubmit)=\"onSubmit()\">\n      <div>\n        <input type=\"text\" required placeholder = \"Type your task\" \n        [(ngModel)]=\"comingtask\" name=\"comingtask\">\n      </div>\n      <button type=\"submit\">Submit</button>\n    </form>\n    \n    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoClass);
    return TodoClass;
}());
exports.TodoClass = TodoClass;
platform_browser_dynamic_1.bootstrap(TodoClass, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map