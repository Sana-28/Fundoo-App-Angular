import { Component } from '@angular/core';
import { Chart } from 'chart.js';
// import { GraphService } from '../../service/graph.service';
import { GraphService } from '../../service/graph.service';

@Component({
  selector: 'app-timeline',
   templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']

})
export class TimelineComponent {

  constructor(private graphObj: GraphService) { }

  ngOnInit() {
  }
  
  public pieChartType:string = 'pie';
 
  // Pie
  public pieChartLabels:string[] = ['Text Notes', 'Image Notes', 'Total Notes'];
  public pieChartData:number[] = [4, 4, 8];
 
  public randomizeType():void {
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}