import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  pias = [
    { imagem: 'Cozinha1.jpg' },
    { imagem: 'Cozinha2.jpg' },
    { imagem: 'Cozinha3.jpg' }
  ];

  cubas = [
    { imagem: 'Lavatorios1.jpg' },
    { imagem: 'Lavatorios2.jpg' },
    { imagem: 'Lavatorios3.jpg' }
  ];

  nichos = [
    { imagem: 'Nicho1.jpg' },
    { imagem: 'Nicho2.jpg' },
    { imagem: 'Nicho3.jpg' }
  ];

  indicePiaAtual = 0;
  indiceCubaAtual = 0;
  indiceNichoAtual = 0;

  trocarImagemPia(direcao: number): void {
    this.indicePiaAtual = (this.indicePiaAtual + direcao + this.pias.length) % this.pias.length;
  }

  trocarImagemCuba(direcao: number): void {
    this.indiceCubaAtual = (this.indiceCubaAtual + direcao + this.cubas.length) % this.cubas.length;
  }

  trocarImagemNicho(direcao: number): void {
    this.indiceNichoAtual = (this.indiceNichoAtual + direcao + this.nichos.length) % this.nichos.length;
  }
  
}
