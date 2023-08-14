import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anime-form',
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css']
})
export class AnimeFormComponent {

  animeForm: FormGroup =  new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, Validators.required),
    cover: new FormControl(null, [Validators.required, Validators.minLength(10)])
  })

  animes: any[] = []

  submitData(data: any){
    console.log(data);
    
    this.animes.push(data)
  }

  form(property: string): FormGroup{
    return this.animeForm.get(property) as FormGroup
  }

}
