import { Component, inject, signal, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.html',
  styleUrl: '../app.css'
})
export class Weather implements OnInit {
  private http = inject(HttpClient);

  @Output() goBack = new EventEmitter<void>();

  protected readonly weatherData = signal<any>(null);
  protected readonly isLoading = signal<boolean>(true);

  ngOnInit() {
    this.fetchWeather();
  }

  private fetchWeather() {
    // Constructing absolute data path explicitly
    const baseApi = 'https://api.open-meteo.com/v1/forecast';
    const params = '?latitude=48.8566&longitude=2.3522&current=temperature_2m,wind_speed_10m';
    const fullUrl = baseApi + params;

    this.http.get(fullUrl).subscribe({
      next: (response: any) => {
        this.weatherData.set(response.current);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Weather API failed to load:', err);
        this.isLoading.set(false);
      }
    });
  }
}
