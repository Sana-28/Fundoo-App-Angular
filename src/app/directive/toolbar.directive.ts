import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Directive({
  selector: '[appToolbar]'
})
export class ToolbarDirective {

  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private elRef: ElementRef) { }
  ngOnInit():void{
    // console.log(this.router.url)
    this.route.parent.url.subscribe((url)=>{
      console.log(this.router.url)
    })
    // this.router.events.subscribe((url:any) =>{
    //   console.log(url)
    // });  
  }
  changeColor(url : string){
    if(url.indexOf("home")){
      this.elRef.nativeElement.style['background-color'] = 'green';
    }
  }
  ngAfterViewInit(): void {
   
    this.changeColor("home")
  }
}
