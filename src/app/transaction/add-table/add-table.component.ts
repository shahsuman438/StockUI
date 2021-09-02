import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { MatRadioButton } from '@angular/material/radio';
import { SharedService } from 'src/app/shared.service';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss']
})
export class AddTableComponent implements OnInit {
  options:any=[]
  constructor(
    private formbuilder:FormBuilder,
    private service:SharedService,
    private router:Router,
    public dialogRef: MatDialogRef<AddTableComponent>,
  ) { }
  

  TType:string=""
  CName:string=""
  TDate:any;
  TQty:any
  TRate:any
  BuyType:any

  

  CProfile:any=[]

  ngOnInit(): void {
    this.getComList();

  }

  getComList(){
    this.service.getCompList().subscribe(data=>{
    this.CProfile=data
    this.options=this.CProfile
    })
  }
  activeBuyType=false
  buychange(TType:any){
      console.log(TType)
      document.documentElement.style.setProperty(`--background-color`, 'rgb(40, 150, 36)');
      this.TType="Buy"
      this.activeBuyType=true
  }

  salechange(TType:any){
    console.log(TType)
    document.documentElement.style.setProperty(`--background-color`, 'rgb(177, 72, 72)');
    this.TType="Sell"
    this.activeBuyType=false
  }

  displayAutoList(subject){
    return subject ? subject.CName :undefined
  }
 
  addTransaction(){
    var val={
      TDate:this.TDate,
      CName:this.CName["CName"],
      TType:this.TType,
      TQty:this.TQty,
      TRate:this.TRate,
      BuyType:this.BuyType
    }
    this.service.addTransaction(val).subscribe(res=>{
      alert(res)
    });
  }

  closeClick(){
    this.getComList();
    this.dialogRef.close();
    this.router.navigate(['Transaction'])
    .then(() => {
    window.location.reload();
    });
  }



  IPOchange(BType:any){
    this.BuyType="IPO"
    console.log(this.BuyType)
  }
  Secondarychange(BType:any){
    this.BuyType="Secondary"
    console.log(this.BuyType)
  }
}
