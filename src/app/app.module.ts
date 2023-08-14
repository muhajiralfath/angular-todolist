import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimeFormComponent } from './anime/anime-form/anime-form.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { ExponentPipe } from './shared/pipes/exponent.pipe';
import { AgePipe } from './shared/pipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnimeFormComponent,
    AnimeListComponent,
    ExponentPipe,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
