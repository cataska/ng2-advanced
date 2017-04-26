import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  type;

  ngOnInit() {
    //this.type = this.route.snapshot.params['type'];
    this.route.params.subscribe(x => {
      this.type = x['type'];
    })
  }

  GoFlot() {
    //this.router.navigateByUrl('charts/flot');
    this.router.navigate(['charts', 'flot']);
  }
}
