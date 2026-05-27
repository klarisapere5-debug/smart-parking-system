import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  parkingSpots = [
    {
      name: 'Downtown West Garage',
      address: '310 N 16th St, St. Louis, MO',
      amenities: ['covered', 'ev charging', 'self park'],
      imgUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800'
    },
    {
      name: 'Riverfront Visitor Parking',
      address: '700 Leonor K Sullivan Blvd, St. Louis, MO',
      amenities: ['free', 'overnight', 'uncovered'],
      imgUrl: 'https://images.unsplash.com/photo-1519583272095-6433daf26b6e?w=800'
    },
    {
      name: 'City Center Parking Deck',
      address: '925 Olive St, St. Louis, MO',
      amenities: ['paid', 'valet', 'security'],
      imgUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800'
    },
    {
      name: 'Midtown Parking Center',
      address: '4500 Forest Park Ave, St. Louis, MO',
      amenities: ['covered', 'camera', 'paid'],
      imgUrl: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800'
    },
    {
      name: 'Gateway Garage',
      address: '700 Market St, St. Louis, MO',
      amenities: ['valet', 'security', 'overnight'],
      imgUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800'
    },
    {
      name: 'Central City Parking',
      address: '1200 Washington Ave, St. Louis, MO',
      amenities: ['self park', 'covered', 'open'],
      imgUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800'
    }
  ];
}