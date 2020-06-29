import { Component, OnInit } from '@angular/core';
import { Bien } from 'src/app/common/bien';
import { BienService } from 'src/app/services/bien.service';

@Component({
  selector: 'app-bien-list',
  templateUrl: './bien-list.component.html',
  styleUrls: ['./bien-list.component.css']
})
export class BienListComponent implements OnInit {

  biens: Bien[];

  constructor(private _bienService: BienService) { }

  ngOnInit(): void {
    this.listBiens();
  }

  listBiens(){
    this._bienService.getBiens().subscribe(
      data => this.biens = data
    )
  }

}
