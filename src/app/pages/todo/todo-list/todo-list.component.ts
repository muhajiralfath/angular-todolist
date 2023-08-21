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

  resAllTodo: ResAllTodo = {
    data: [], page: 0, size: 0, totalElement: 0, totalPages: 0
  }
  totalPages: number[] = []
  currentPage: number = this.resAllTodo.page
  isLoading: boolean = false

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
    this.isLoading = true
    this.service.getTodos(page, size, shortBy, direction).subscribe((res: ResAllTodo) => {
      this.totalPages = []
      this.todos = res.data
      this.resAllTodo = res
      this.getArrayTotalPage(this.resAllTodo.totalPages)
      this.isLoading = false
    })
  }

  getArrayTotalPage(ttlPage: number): void {
    for (let i=0; i < this.resAllTodo.totalPages; i++){
      this.totalPages.push(i)
    }
  }

  paging(page: number): void{
    this.reqParams.page = page
    this.request()
  }
  nextPage(): void  {
    if (this.currentPage < this.resAllTodo.totalPages){
      this.reqParams.page += 1
    }
    this.request()
  }
  prevPage(): void  {
    if (this.currentPage > 0 ){
      this.reqParams.page -= 1
    }
    this.request()
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

  protected readonly indexedDB = indexedDB;
}
