import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  imgSrc: string = 'assets/images/undraw_welcome_cats_thqn.png'
  imgAlt: string = 'Cat'

  message: string = "Mouse Hover Me"
  name: string = ''

  mOver():void{
    this.message = 'Thankyou for hover me'
  }

  mOut():void{
    this.message = 'Hover me again'
  }

  onKeyPress(event: any): void{
    console.log(event);
    console.log(event.target.value);
    this.name = event.target.value
  }

  tes: any[] = []
  isActive: boolean = true

}
