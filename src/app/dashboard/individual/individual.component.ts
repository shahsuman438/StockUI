import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {
  @Input() stockname
  @Input() obje
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
