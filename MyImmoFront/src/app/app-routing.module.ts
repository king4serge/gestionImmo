import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienListComponent } from './components/bien-list/bien-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BienDetailsComponent } from './components/bien-details/bien-details.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path: 'biens', component: BienListComponent},
  {path: 'biens/:id', component: BienDetailsComponent},
  {path: 'search/:keyword', component: BienListComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'categorie/:id', component: BienListComponent},
  {path: '', redirectTo: '/biens', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
