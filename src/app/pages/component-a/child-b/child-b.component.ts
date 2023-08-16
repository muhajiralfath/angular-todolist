import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ){}

  childId: string = ''

  ngOnInit(): void{
    this.route.params.subscribe({
      next: (params) => {
        console.log(params['id']);
        this.childId = params['id']
      }
    })
  }

  moveToChildA(){
    this.router.navigateByUrl('/component-a/child-a')
  }

}
