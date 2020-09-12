import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BienService } from 'src/app/services/bien.service';
import { Bien } from 'src/app/common/bien';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  biens: Bien[];
  currentPage: number=0;
  size: number=6;
  totalPages: number=0;
  pages: Array<number>;

  constructor(private _router: Router,
    private _bienService: BienService) { }

  ngOnInit(): void {
  }

  searchBiens(keyword){
    this._router.navigateByUrl('/search/'+ keyword);
    
    
  }

  onSearchBiens(form){
    this._bienService.searchBiens(form.keyword,this.currentPage,this.size)
    .subscribe(data =>{
      //this.totalPages = data["page"].totalPages;
      this.pages = new Array<number>(this.totalPages);
      this.biens = data;
      console.log(data);
      
    });
  }

}
