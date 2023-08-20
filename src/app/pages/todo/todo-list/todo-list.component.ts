import {Component} from '@angular/core';
import {TodoService} from '../todo.service';
import {ToDo} from '../model/todo.model';
import Swal from 'sweetalert2'
import {Router} from "@angular/router";
import {ReqParams, ResAllTodo} from "../model/resAllTodo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: ToDo[] = []
  reqParams : ReqParams = {
    direction: "", page: 0, shortBy: "", size: 0
  }

  constructor(private readonly service: TodoService,
              private readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.request()
  }

  request():void {
    this.getAllTodo(this.reqParams.page, this.reqParams.size = 5, this.reqParams.shortBy, this.reqParams.direction)
  }


  getAllTodo(page: number, size: number, shortBy: string, direction: string) {
    this.service.getTodos(page, size, shortBy, direction).subscribe((res: ResAllTodo) => {
      console.log(res.data)
      this.todos = res.data
    })
  }

  paging(): void{

  }

  changeDirect(short: string): void {
    this.reqParams.direction = short
    this.request()
  }

  update(id: string): void {
    this.router.navigate(["form", id])
  }

  deleteTodo(id: string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteTodo(id).subscribe(() => {
          this.getAllTodo(this.reqParams.page, this.reqParams.size, this.reqParams.shortBy, this.reqParams.direction)
        })
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}
