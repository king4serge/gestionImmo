import { Component, OnInit } from '@angular/core';
import { Bien } from 'src/app/common/bien';
import { ActivatedRoute } from '@angular/router';
import { BienService } from 'src/app/services/bien.service';

@Component({
  selector: 'app-bien-details',
  templateUrl: './bien-details.component.html',
  styleUrls: ['./bien-details.component.css']
})
export class BienDetailsComponent implements OnInit {
  bien: Bien = new Bien();

  constructor(private _activatedRoute: ActivatedRoute,
     private _bienService: BienService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      () =>{
        this.getBienInfo();
      }
    );
  }

  getBienInfo(){
    const id: number = +this._activatedRoute.snapshot.paramMap.get('id');
    this._bienService.get(id).subscribe(
      data => {
        this.bien = data;
      }
    );
  }

}
