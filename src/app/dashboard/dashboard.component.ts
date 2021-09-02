import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  name = " nepal investment bank "
  obj=[{
    name:"Hash Map 3",
    age:223,
    city:"birgunj"
  },
  {
    name:"hello world",
    age:25,
    city:"shreepur"
  },
  {
    name:"Hash Map",
    age:25,
    city:"shreepur"
  },
  {
    name:"Hash Map",
    age:25,
    city:"shreepur"
  },
]

}
