import { Component, inject, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

// Define the shape of a single Product for type safety
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrl: '../app.css',
  imports: [RouterLink]
})
export class Products implements OnInit {
  private http = inject(HttpClient);

  // Signals to manage your view state reactively
  protected readonly productsList = signal<Product[]>([]);
  protected readonly isLoading = signal<boolean>(true);
  protected readonly errorMessage = signal<string | null>(null);

  ngOnInit() {
    this.fetchProducts();
  }

  private fetchProducts() {
    const url = 'http://localhost:8080/products/all';

    this.http.get<any>(url).subscribe({
      next: (response) => {
        if (response) {
          this.productsList.set(response.products);
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to load products from Products Api:', err);
        this.isLoading.set(false);
      }
    });
  }
}
