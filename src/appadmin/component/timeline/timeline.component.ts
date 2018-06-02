import { Component } from '@angular/core';
import { UserNoteResp } from '../../model/usernoteresp';
import { UserNoteService } from '../../service/usernote.service';

@Component({
  selector: 'app-timeline',
   templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']

})
export class TimelineComponent {

  usernotes : UserNoteResp[];

  constructor(private userNoteSerObj: UserNoteService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData():void{
    this.userNoteSerObj.getData()
                          .subscribe(response => {
                             this.usernotes = response;
                             //debugger;
                            });
  }

  // lineChart
  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> = ['Text Notes', 'Image Notes'];
  public lineChartType:string = 'line';

  // Pie
  public pieChartLabels:string[] = ['Text Notes', 'Image Notes', 'Total Notes'];
  public pieChartType:string = 'pie';

  public pieChartData:number[] ;
 
  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}