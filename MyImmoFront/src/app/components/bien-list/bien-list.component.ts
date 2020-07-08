import { Component, OnInit } from '@angular/core';
import { Bien } from 'src/app/common/bien';
import { BienService } from 'src/app/services/bien.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bien-list',
  //templateUrl: './bien-list.component.html',
  templateUrl: './bien-grid.component.html',
  styleUrls: ['./bien-list.component.css']
})
export class BienListComponent implements OnInit {

  biens: Bien[];
  currentCategorieId: number;
  searchMode: boolean;

  constructor(private _bienService: BienService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(()=>{
      this.listBiens();
    })
  }

  listBiens(){
    this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      //do search work
      this.handleSearchBiens();
    }
    else{
      //display biens based on category
      this.handleListBiens();
    }
    
  }

  handleListBiens(){
    const hasCategorieId: boolean = this._activatedRoute.snapshot.paramMap.has('id');
    if(hasCategorieId){
     this.currentCategorieId = +this._activatedRoute.snapshot.paramMap.get('id');
    }
    else{
      this.currentCategorieId = 1;
    }

    this._bienService.getBiens(this.currentCategorieId).subscribe(
      data => this.biens = data
    )

  }

  handleSearchBiens(){
    const keyword: string = this._activatedRoute.snapshot.paramMap.get('keyword');
    this._bienService.searchBiens(keyword).subscribe(
      data =>{
        this.biens = data;
        
      }
    )
  }

}
