import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getItem(): Array<Menu> {
    const menu: Array<Menu> = [
    {
      name: 'Inicio',
      url: '#Banner'
    },

    {
      name: 'Sobre Mim',
      url: '#Sobre'
    },

    {
      name: 'Catálogo',
      url: '#catálogo'
    },

    {
      name: 'Serviços',
      url: 'servicos'
    }
  ];

    return menu;
  }
}
