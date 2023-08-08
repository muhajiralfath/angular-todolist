import { Component } from "@angular/core";

@Component({
    selector: 'hello-world',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})

export class HelloComponent{
    title = 'Pascal 12'
    message: string = 'This is message'

    getMessage(): string {
        return 'Return message'
    }

    people: string[] = ['Fauzan', 'Eddy', 'Akbar', 'Heru']

    getPeople() : string {
        let result: string = ''
        for(const p of this.people){
            result += p
        }
        return result
    }
    employees = [
        {
          name: 'Fadli',
          address: 'Jakarta Selatan'
        },
        {
          name: 'John',
          address: 'Jakarta Timur'
        },
        {
          name: 'Gerrard',
          address: 'Jakarta Utara'
        },
        {
          name: 'Lampard',
          address: 'Jakarta Timur'
        },
      ]

      increment: number = 0;
}