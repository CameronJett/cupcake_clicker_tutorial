import { Component } from '@angular/core';
import data from '../assets/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cupcake-clicker-tutorial';
  json_data:any = []

  constructor() {
    this.json_data = data.TASKS;
    console.log("Reading local json", this.json_data);
  }

  ngOnInit() {}

}