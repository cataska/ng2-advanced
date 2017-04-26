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
  num;

  ngOnInit() {
    //this.type = this.route.snapshot.params['type'];
    this.route.params.subscribe(x => {
      this.type = x['type'];
      this.num = x['num'];
    })
  }

  GoFlot() {
    //this.router.navigateByUrl('charts/flot');
    this.router.navigate(['charts', 'flot']);
  }

  GoNext(num: number) {
    let next = +this.type + num;
    this.router.navigate(['..', next], {
      relativeTo: this.route,
      queryParams: {
        p1: 100,
        p2: 200
      }
    });
  }
}
