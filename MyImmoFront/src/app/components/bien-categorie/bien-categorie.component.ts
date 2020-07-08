import { Component, OnInit } from '@angular/core';
import { BienCategorie } from 'src/app/common/bien-categorie';
import { BienService } from 'src/app/services/bien.service';

@Component({
  selector: 'app-bien-categorie',
  templateUrl: './bien-categorie.component.html',
  styleUrls: ['./bien-categorie.component.css']
})
export class BienCategorieComponent implements OnInit {
  bienCategories: BienCategorie[];

  constructor(private _bienService: BienService) { }

  ngOnInit(): void {
    this.listBienCategories();
  }

  listBienCategories(){
    this._bienService.getBienCategories().subscribe(
      data =>{ this.bienCategories = data;
        
      }
    );

  }

}
