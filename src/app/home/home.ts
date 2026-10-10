import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router'; // Import RouterLink for page clicking
import { Profile } from '../profile/profile';
import { MyLifecycleSample } from '../my-lifecycle-sample/my-lifecycle-sample';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: '../app.css',
  imports: [Profile, RouterLink, MyLifecycleSample]
})
export class Home {
  protected readonly clickCount = signal(0);

  protected incrementCount() {
    this.clickCount.update(currentValue => currentValue + 1);
  }
}
