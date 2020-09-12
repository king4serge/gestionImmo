import { Component, OnInit } from '@angular/core';
import { BienService } from 'src/app/services/bien.service';
import { Utilisateur } from 'src/app/common/utilisateur';
import { Role } from 'src/app/common/role';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 // utilisateur: Utilisateur = new Utilisateur();
 users: Utilisateur[];
  role: Role = new Role();

  constructor(private _bienService: BienService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      () => {
        //this.getInfoUtilisateur();
       this.utilisateurs();
      }
    );
  }

 /*
  getInfoUtilisateur(){
    const id: number = +this._activatedRoute.snapshot.paramMap.get('id');
    this._bienService.getOneUtilisateur(id).subscribe(
      data => {
        console.log(data);
        
        //this.utilisateur = data;
      },err=>{
        console.log(err);
        
      }
    );
  }
  */
  
  utilisateurs(){
    return this._bienService.getUtilisateurs().subscribe(
      data =>{
        this.users = data;
        //console.log(data);
        
      },err =>{console.log(err);
      }
    );
  }
}
