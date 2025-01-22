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
      url: '#banner'
    },

    {
      name: 'Diferenciais',
      url: '#diferenca'
    },

    {
      name: 'Sobre Mim',
      url: '#sobre'
    },

    {
      name: 'Catálogo',
      url: '#catálogo'
    },

    {
      name: 'Serviços',
      url: '#servicos'
    }
    ];

    return menu;
  }
}
