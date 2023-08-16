import { Injectable } from '@angular/core';
import { ToDo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private todos: ToDo[] = [
    {
      id: '001',
      name: 'Belajar',
      description: 'Belajar Angular'
    },
    {
      id: '002',
      name: 'Makan',
      description: 'Makan Malam'
    }
  ]

  getTodos(): ToDo[]{
    return this.todos
  }

  addTodo(data: ToDo): void{
    let index = this.todos.findIndex((e) => e.id === data.id)
    if(index >= 0){
      this.todos.splice(index, 1, data)
    }else{
    this.todos.push(data)
    }
   }


   deleteTodo(i: number){
    this.todos.splice(i, 1)
   }


}
