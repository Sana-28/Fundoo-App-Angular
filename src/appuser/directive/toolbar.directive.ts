/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is color directive to change color of ToolBar
*/


import { Directive, ElementRef, Input, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operator/filter';
import { map } from 'rxjs/operator/map';


@Directive({
  selector: '[appToolbar]'
})
export class ToolbarDirective {

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private elRef: ElementRef) {
  }

  ngOnInit(){
    console.log("check->>", this.router.url)
    
    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationEnd){
        console.log(event);
        this.changeColor(event.url);        
      }
    });
  }
  
  changeColor(url: string) {

    if (url.indexOf("createnotes")>-1) {
      this.elRef.nativeElement.style['background-color'] = 'skyblue';
    }

    else if (url.indexOf("archive")>-1) {
      this.elRef.nativeElement.style['background-color'] = 'gray';
    }

    else if(url.indexOf("reminder")>-1){
      this.elRef.nativeElement.style['background-color'] = 'pink';
    }

    else if(url.indexOf("trash")>-1){
      this.elRef.nativeElement.style['background-color'] = 'RosyBrown';
    }
  }
}
