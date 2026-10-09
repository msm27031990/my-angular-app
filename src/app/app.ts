import { Component, signal } from '@angular/core';
import { Profile } from './profile/profile';
import { Weather } from './weather/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Profile, Weather]
})
export class App {
  protected readonly title = signal('my-angular-app');

  // 1. Create a reactive counter using a Signal
  protected readonly clickCount = signal(0);

 // 3. Track active page view: 'home' or 'weather'
  protected readonly currentPage = signal<string>('home');

  // 2. Add a method to update the signal value
  protected incrementCount() {
    this.clickCount.update(currentValue => currentValue + 1);
  }

 // Helper methods to navigate views
  protected navigateTo(page: string) {
    this.currentPage.set(page);
  }
}
