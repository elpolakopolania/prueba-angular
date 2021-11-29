import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monto',
  templateUrl: './monto.component.html',
  styleUrls: ['./monto.component.css']
})
export class MontoComponent implements OnInit {
  showFiller = false;
  value = 10000;
  max = 100000;
  min = 10000;
  minDate: Date;

  constructor() {
    this.minDate = new Date();
   }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
