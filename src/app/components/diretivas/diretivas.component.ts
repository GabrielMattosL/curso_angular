import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  size = 40;
  font = 'Arial';
  color = 'red';

  mudaForma = ['mudaCor', 'mudaTamanho', 'mudaFonte', 'mudaFundo']
}
