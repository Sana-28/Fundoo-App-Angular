import { Directive, ElementRef, Input, AfterViewInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
    // this.activatedroute.parent.url.subscribe((url)=>{
    //   console.log(this.router.url)
    // })

    this.router.events.subscribe((url: any) => {
      console.log('url=', url)
      if (url === 'home/createnotes') {
        this.changeColor(url);
      }
    });

    /* this.router.events.pairwise().subscribe((url:any) =>{
         console.log('url=', url)
     });*/
  }
  changeColor(url: string) {
    //  let Url="http://localhost:4200/"

    if (url.indexOf("createnotes") > -1) {
      this.elRef.nativeElement.style['background-color'] = 'skyblue';

      let url = "createnotes";
      this.ngAfterViewInit(url);

    }
    else if (url.indexOf("trash")) {
      this.elRef.nativeElement.style['background-color'] = 'grey';
      this.ngAfterViewInit("home/trash");
    }
  }
  ngAfterViewInit(url): void {

    if (url === 'home/createnotes') {
      this.changeColor("home/createnotes")
    }
    else if (url === 'home/trash') {
      this.changeColor("home/trash")
    }
  }
}
