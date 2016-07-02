import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { bootstrap }    from '@angular/platform-browser-dynamic';


@Component({
    selector: 'todo',
    template : 
    `
    <h1>Todo List</h1>
    
    <div *ngFor="let task of todos | async">
        <a href = '#'>{{ task }} </a> 
    </div>
    
    <form  (ngSubmit)="onSubmit()">
      <div>
        <input type="text" required placeholder = "Type your task" 
        [(ngModel)]="comingtask" name="comingtask">
      </div>
      <button type="submit">Submit</button>
    </form>
    
    
    `
})
export class TodoClass{
    
     comingtask : any;
     private todos: Subject<any[]>;
     localarray : any[];
     
     constructor(){
          this.todos = <Subject<any[]>>new Subject();
          this.localarray = []
     }
     
      onSubmit() { 
             this.localarray.push(this.comingtask);
             this.todos.next(this.localarray);
             
      }
     
}
bootstrap(TodoClass, [
  disableDeprecatedForms(),
  provideForms()
 ])
 .catch((err: any) => console.error(err));