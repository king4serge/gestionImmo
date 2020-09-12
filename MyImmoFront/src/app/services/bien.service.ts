import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Bien } from '../common/bien';
import { map } from 'rxjs/operators'
import { BienCategorie } from '../common/bien-categorie';
import { Utilisateur } from '../common/utilisateur';
import { Role } from '../common/role';

@Injectable({
  providedIn: 'root'
})
export class BienService {
  private baseUrl = "http://localhost:8080/biens";
  private categorieUrl = "http://localhost:8080/categories";
  private utilisateurUrl = "http://localhost:8080/utilisateurs";
  private roleUrl = "http://localhost:8080/roleUtilisateurs";
  
  constructor(private httpClient: HttpClient) { }

  getBiens(theCategorieId: number,page: number, size: number): Observable<Bien[]>{
    const searchUrl = `${this.baseUrl}/search/categorieId?id=${theCategorieId}&page=${page}size=${size}`;
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

  searchBiens(keyword: string,page: number, size: number): Observable<Bien[]>{
    const searchUrl = `${this.baseUrl}/search/searchbykeyword?nom=${keyword}&page=${page}&size=${size}`;
    return this.getBiensList(searchUrl);
  }

  get(bienId: number): Observable<Bien> {
    const bienDetailsUrl = `${this.baseUrl}/${bienId}`;
    return this.httpClient.get<Bien>(bienDetailsUrl);
  }

  getUtilisateurs() : Observable<Utilisateur[]>{
    return this.httpClient.get<GetResponseUtilisateur>(this.utilisateurUrl).pipe(
      map(response => response._embedded.utilisateurs)
    );
  }

  getRoles(): Observable<Role[]>{
    return this.httpClient.get<GetResponseRole>(this.roleUrl).pipe(
      map(response => response._embedded.role)
    );
  }

  getOneRole(roleId: number): Observable<Role>{
    const roleUrlById = `${this.roleUrl}/${roleId}`;
    return this.httpClient.get<Role>(roleUrlById);
  }

  getOneUtilisateur(utilisateurId: number): Observable<Utilisateur>{
    const userUrl = `${this.utilisateurUrl}/${utilisateurId}`;
    //const userUrl = this.utilisateurUrl+"/"+utilisateurId;
    return this.httpClient.get<Utilisateur>(userUrl);
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

interface GetResponseUtilisateur{
  _embedded: {
    utilisateurs: Utilisateur[];
  }
}

interface GetResponseRole{
  _embedded: {
    role: Role[];
  }
}
