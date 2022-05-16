import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string   = 'Felício';
  age:  number = 31;
  job = 'Developer';
  hobbies = ["Correr", "Jogar", "Estudar"];
  car = 
  {
    name: "Gol",
    year: 2015
  }

  constructor() { }

  ngOnInit(): void {
  }

}
