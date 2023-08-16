import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent {

  constructor(private readonly route: ActivatedRoute){}

  ngOnInit():void{
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      
    })
  }

}
