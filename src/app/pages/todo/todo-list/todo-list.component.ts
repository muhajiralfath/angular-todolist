import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private readonly service: TodoService){}

  todos: ToDo[] = []

  ngOnInit(){
    this.getAllTodo()
  }

  getAllTodo(){
   this.todos = this.service.getTodos()
  }

  deleteTodo(id: number){
    this.service.deleteTodo(id)
  }

}
