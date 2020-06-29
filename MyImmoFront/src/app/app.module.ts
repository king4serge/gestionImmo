import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienListComponent } from './components/bien-list/bien-list.component';
import { from } from 'rxjs';
import { BienService } from './services/bien.service';

@NgModule({
  declarations: [
    AppComponent,
    BienListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BienService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
