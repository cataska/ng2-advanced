import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  data: any;
  constructor() { }

  ngOnInit() {
    this.data = {
      name: "cat"
    };
  }

}
