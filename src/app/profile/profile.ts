import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  // Simple reactive user details
  protected readonly userName = signal('Moni Sankar Mandal');
  protected readonly userRole = signal('Angular Beginner');
}
