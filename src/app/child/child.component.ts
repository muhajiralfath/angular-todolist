import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  name: string = ''

  @Output()
  nameChange = new EventEmitter<string>();

  id = new Date()
  intervalId: any;

  nameChanges(){
    this.nameChange.emit(this.name)
  }

  constructor(){
    console.log('Constructor');
  }

  ngOnInit(){
    console.log('On Init');
    this.tick()
  }

  tick(){
    this.intervalId = setInterval(() => {
      this.id = new Date()
      console.log(this.id);
    }, 1000)
  }

  ngOnChanges(){
    console.log('on changes');
  }

  ngDoCheck(){
    console.log("Do Check");
  }

  ngAfterContentInit(){
    console.log("After Content Init");
  }

  ngAfterContentChecked(){
    console.log("After content checked");
  }

  ngAfterViewInit(){
    console.log("After view init");
  }

  ngAfterViewChecked(){
    console.log("after view checked");
  }

  ngOnDestroy(){
    console.log("On destroy");
    clearInterval(this.intervalId)
    console.log('Interval cleared');
    
  }

}
