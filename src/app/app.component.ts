import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  SideBarOpen=true;
  sideBarToggler(){
    this.SideBarOpen=!this.SideBarOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
  if(window.innerWidth<866)[
    this.SideBarOpen=false
  ]
  else{
    this.SideBarOpen=true
  }
  }

  ngOnInit(): void {
    if(window.innerWidth<866)[
      this.SideBarOpen=false
    ]
    else{
      this.SideBarOpen=true
    }
  }

}
