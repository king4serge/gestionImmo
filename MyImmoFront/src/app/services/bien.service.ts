import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Bien } from '../common/bien';
import { map } from 'rxjs/operators'
import { BienCategorie } from '../common/bien-categorie';

@Injectable({
  providedIn: 'root'
})
export class BienService {
  private baseUrl = "http://localhost:8080/biens";
  private categorieUrl = "http://localhost:8080/categories"

  constructor(private httpClient: HttpClient) { }

  getBiens(theCategorieId: number): Observable<Bien[]>{
    const searchUrl = `${this.baseUrl}/search/categorieId?id=${theCategorieId}`;
    return this.getBiensList(searchUrl);
  }
  private getBiensList(searchUrl: string): Observable<Bien[]> {
    return this.httpClient.get<GetResponseBiens>(searchUrl).pipe(
      map(response => response._embedded.biens)
    );
  }

  getBienCategories(): Observable<BienCategorie[]>{
    return this.httpClient.get<GetResponseBienCategories>(this.categorieUrl).pipe(
      map(response => response._embedded.categories)
    );
  }

  searchBiens(keyword: string): Observable<Bien[]>{
    const searchUrl = `${this.baseUrl}/search/searchbykeyword?nom=${keyword}`;
    return this.getBiensList(searchUrl);
  }

  get(bienId: number): Observable<Bien> {
    const bienDetailsUrl = `${this.baseUrl}/${bienId}`;
    return this.httpClient.get<Bien>(bienDetailsUrl);
  }
}


interface GetResponseBiens{
  _embedded: {
    biens: Bien[];
  }
}

interface GetResponseBienCategories{
  _embedded: {
    categories: BienCategorie[];
  }
}
