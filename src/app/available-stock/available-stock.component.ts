import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-available-stock',
  templateUrl: './available-stock.component.html',
  styleUrls: ['./available-stock.component.scss']
})
export class AvailableStockComponent implements OnInit {

  constructor(
    private service: SharedService,
  ) { }

  ngOnInit(): void {
    this.refreshCompProfile();
  }
  CompList:any=[]

  refreshCompProfile(){
    this.service.getCompList().subscribe(data=>{
      this.CompList=data
    })
  }

}
