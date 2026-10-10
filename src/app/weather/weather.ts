import { Component, inject, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.html',
  styleUrl: '../app.css',
  imports: [RouterLink]
})
export class Weather implements OnInit {
  private http = inject(HttpClient);
  protected readonly weatherData = signal<any>(null);
  protected readonly isLoading = signal<boolean>(true);

  ngOnInit() {
    this.fetchWeather();
  }

  private fetchWeather() {
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
