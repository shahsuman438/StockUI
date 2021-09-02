import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import {AddTableComponent} from '../add-table/add-table.component'

import { SharedService } from 'src/app/shared.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.scss']
})
export class ShowTableComponent implements OnInit {
  
  constructor(
    private dialog : MatDialog,
    private service: SharedService,
    
  ) { }

public TransactionList:any=[]
public pageSlice

  ngOnInit(): void {
    this.refreshTransactionList();
    // console.log("page slice",this.pageSlice)
  }
  refreshTransactionList(){
    this.service.getTransactionList().subscribe(data=>{
      this.TransactionList=data
      this.TransactionList=this.TransactionList.reverse()
      this.pageSlice=this.TransactionList.slice(0,9)
      console.log(this.TransactionList)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.TransactionList.filter = filterValue.trim().toLowerCase();
  }

  onPageChange(event:PageEvent){
    const startIndex=event.pageIndex*event.pageSize;
    let endIndex= startIndex+event.pageSize;
    if(endIndex > this.TransactionList.length){
      endIndex=this.TransactionList.length;
    }
    this.pageSlice=this.TransactionList.slice(startIndex,endIndex)
  }


  onCreate(){
    const dialogconfig=new MatDialogConfig();
    dialogconfig.disableClose=false;
    dialogconfig.autoFocus=false;
    
    document.documentElement.style.setProperty(`--background-color`, 'transparent');
    this.dialog.open(AddTableComponent,dialogconfig);
  }

  deleteClick(item){
    if(confirm("Are You Sure??")){
      this.service.deleteTransaction(item._id).subscribe(data=>{
        // alert(data.toString());
        this.refreshTransactionList();
      })
    }
  }
}
  