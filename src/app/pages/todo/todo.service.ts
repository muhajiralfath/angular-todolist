import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ToDo} from "./model/todo.model";
import {ResAllTodo} from "./model/resAllTodo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getTodos(page: number, size: number, shortBy: string, direction: string): Observable<ResAllTodo> {
    return this.http.get<ResAllTodo>(`/api/todos?page=${page}&size=${size}&short-by=${shortBy}&direction=${direction}`)
  }

  addTodo(data: ToDo): Observable<ToDo>{
    return this.http.post<ToDo>("/api/todos", data)
  }


  deleteTodo(id: string):Observable<any> {
      return this.http.delete(`/api/todos/${id}`)
  }

  getById(id: string): Observable<ToDo>{
    return this.http.get<ToDo>(`/api/todos/${id}`)
  }

  update(todo: ToDo): Observable<ToDo>{
    return this.http.put<ToDo>("/api/todos", todo)
  }

}
