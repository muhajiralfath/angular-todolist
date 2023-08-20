import {ToDo} from "./todo.model";

export interface ResAllTodo {
  data: ToDo[],
  totalElement: number,
  totalPages: number,
  page: number,
  size: number
}

export interface ReqParams {
  page: number,
  size: number,
  shortBy: string,
  direction: string
}
