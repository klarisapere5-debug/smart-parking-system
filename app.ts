import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="page">
      <h1>Smart Parking System</h1>
      <p>Total Parking Spots: {{ parkingSpots.length }}</p>

      <section class="grid">
        <div class="card" *ngFor="let parking of parkingSpots">
          <h2>{{ parking.name }}</h2>
          <p>{{ parking.address }}</p>
          <p>{{ parking.status }}</p>
        </div>
      </section>
    </main>
  `,
  styles: [`
    .page { padding: 35px; font-family: Arial, sans-serif; background: #0f9da8; min-height: 100vh; color: white; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .card { background: rgba(255,255,255,.25); padding: 20px; border-radius: 12px; }
  `]
})
export class App {
  parkingSpots = [
    { name: 'A1', address: 'Main Entrance', status: 'Available' },
    { name: 'A2', address: 'Main Entrance', status: 'Reserved' },
    { name: 'B1', address: 'North Lot', status: 'Available' },
    { name: 'B2', address: 'North Lot', status: 'Occupied' },
    { name: 'C1', address: 'Garage Level 1', status: 'Available' },
    { name: 'C2', address: 'Garage Level 1', status: 'Occupied' }
  ];
}
