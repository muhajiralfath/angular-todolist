import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoService } from './todo/todo.service';


@NgModule({
  declarations: [
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  providers: [TodoService]
})
export class PagesModule { }
