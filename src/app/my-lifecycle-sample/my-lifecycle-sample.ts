import { Component } from '@angular/core';

@Component({
  selector: 'app-my-lifecycle-sample',
  imports: [],
  templateUrl: './my-lifecycle-sample.html',
  styleUrl: './my-lifecycle-sample.css',
})
export class MyLifecycleSample {
   ngOnChanges() {
      console.log("ngOnChanges : Change detection")
   }

   ngOnInit() {
      console.log("ngOnInit : Initialization of component / directive")
   }

   ngDoCheck() {
      console.log("ngDoCheck : Custom change detection")
   }

   ngAfterContentInit() {
      console.log("ngAfterContentInit : Content initialization")
   }

   ngAfterContentChecked() {
      console.log("ngAfterContentChecked : Checking changes in content")
   }

   ngAfterViewInit() {
      console.log("ngAfterViewInit : View initialization")
   }

   ngAfterViewChecked() {
      console.log("ngAfterViewChecked : Checking changes in views")
   }

   ngOnDestroy() {
      console.log("ngOnDestroy : Destruction of component / directive")
   }
}
