import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule],
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
  
export class HeaderComponent {
  userName: string = 'Ankit';
  userRegion: string = 'india';

  getFlag(region: string) {
    return region;
  }
}
