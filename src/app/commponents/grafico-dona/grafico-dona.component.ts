import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

  @Input()
  public ChartLabels: Label[] = [];
  @Input()
  public ChartData: number[] = [
    
  ];
  @Input()
  public ChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
