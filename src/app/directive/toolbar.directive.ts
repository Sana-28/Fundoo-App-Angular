/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description: This is color directive to change color of ToolBar
*/


import { Directive, ElementRef, Input, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap,NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/pairwise';


@Directive({
  selector: '[appToolbar]'
})
export class ToolbarDirective {

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    private elRef: ElementRef) {
  }

  ngOnInit(): void {
    console.log("check->>", this.router.url)
    /*this.activatedroute.parent.url.subscribe((url)=>{
      console.log(this.router.url)
    })*/

    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationEnd){
        console.log(event);
        this.changeColor(event.url);        
      }
        /*if (url === 'home/createnotes') {
        this.changeColor(url);
      }*/
    });

    /* this.router.events.pairwise().subscribe((url:any) =>{
         console.log('url=', url)
     });*/
  }
  
  changeColor(url: string) {
    //  let Url="http://localhost:4200/"

    if (url.indexOf("createnotes")>-1) {
      this.elRef.nativeElement.style['background-color'] = 'skyblue';

      // let url = "createnotes";
      // this.ngAfterViewInit(url);

    }
    else if (url.indexOf("archive")>-1) {
      this.elRef.nativeElement.style['background-color'] = 'MediumSlateBlue	';
     // this.ngAfterViewInit("home/trash");
    }

    else if(url.indexOf("reminder")>-1){
      this.elRef.nativeElement.style['background-color'] = 'pink';
    }

    else if(url.indexOf("trash")>-1){
      this.elRef.nativeElement.style['background-color'] = 'RosyBrown';
    }


    // else if (url.indexOf("archive")){
    //   this.elRef.nativeElement.style['background-color'] = 'black';
    // }
  }
  ngAfterViewInit(url): void {

    // if (url === 'home/createnotes') {
    //   this.changeColor("home/createnotes")
    // }
    // else if (url === 'home/trash') {
    //   this.changeColor("home/trash")
    // }
   // this.changeColor("home/trash")
  }
}
