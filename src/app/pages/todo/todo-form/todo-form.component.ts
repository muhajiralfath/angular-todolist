import {Component, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";
import {ToDo} from "../model/todo.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(""),
    todo: new FormControl(""),
    description: new FormControl("")
  })

  receiveToDo: ToDo = {
    id: "",
    todo: "",
    description: ""
  }

  constructor(
    private readonly service: TodoService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getDetail()
  }

  getDetail(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.service.getById(params['id']).subscribe(res => {
            this.receiveToDo = res
          console.log(this.receiveToDo)
            if (res) {
              this.todoForm.patchValue(this.receiveToDo)
            }
          }
        )
      }
    })
  }

  addTodo(todo: ToDo): void {
    if (!this.receiveToDo) {
      this.service.update(todo).subscribe((res) => {
        this.router.navigateByUrl("")
      })
    } else {
      this.service.addTodo(todo).subscribe((res) => {
        this.router.navigateByUrl("")
      })
    }
  }
}
