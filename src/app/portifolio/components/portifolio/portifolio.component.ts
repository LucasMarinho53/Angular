import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  title = 'Lucas França Marinho';
  Objetivo  = 'Aperfeiçoar meus conhecimentos de Front-end e Back-end para eu conseguir juntar os dois conhecimentos e se tornar um FullStack.';
  Tec = 'Manutenção de Hardware, Front-end, Implementação de servidores e Formatação de PCs';
  Curso = 'Estacio (Engenharia de software) / Senac (Tecnico em informatica)';
  Exp = 'Prefeitura de Nova Iguaçu (Estagio em Informatica) / CCAA (Inglês - Avançado) / Senac (Programação)';

  constructor() { }

  ngOnInit(): void {
  }

}
