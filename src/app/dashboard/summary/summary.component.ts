import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(
    private service: SharedService,
  ) { }

  ngOnInit(): void {
    this.refreshCompProfile();
    document.documentElement.style.setProperty(`--summary-border-color`, 'rgb(40, 150, 36)');
    
  }

  complist:any=[];
  TUnit:any=0
  TSoldUnit:any=0
  TotalInvestment:any=0
  TotalRecevable:any=0
  TotalSoldValue:any=0
  TotalProfitLoss:any=0
  totalamt:any=0
  refreshCompProfile(){
    this.service.getCompList().subscribe(data=>{
      this.complist=data
      for (var item of this.complist){
        this.TSoldUnit+=item.SoldUnit
        this.TotalInvestment+=item.CInvestment
        this.TUnit+=item.CQty
        this.TotalSoldValue+=item.SoldValue
        this.TotalProfitLoss+=item.ProfitLoss
        this.totalamt=this.totalamt+(item.WACC*item.CQty)
      }
    })
  };


  

  



 
  

 

}
