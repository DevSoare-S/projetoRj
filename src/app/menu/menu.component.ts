import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private menuService: MenuService) {

  }

  menuItems?: Array<Menu>;
  
  menuStatus = 'closed';

  ngOnInit() {
    const menu = this.menuService.getItem();

    this.menuItems = menu;
  }

  menuClick() {

    this.menuStatus = (this.menuStatus === 'open' ? 'closed' : 'open');
    
  }
}
