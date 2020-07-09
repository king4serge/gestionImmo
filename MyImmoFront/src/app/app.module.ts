import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienListComponent } from './components/bien-list/bien-list.component';

import { BienService } from './services/bien.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BienCategorieComponent } from './components/bien-categorie/bien-categorie.component';
import { SearchComponent } from './components/search/search.component';
import { BienDetailsComponent } from './components/bien-details/bien-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BienListComponent,
    PageNotFoundComponent,
    BienCategorieComponent,
    SearchComponent,
    BienDetailsComponent
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
