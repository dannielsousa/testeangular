import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacoes-recebidas',
  templateUrl: './informacoes-recebidas.component.html',
  styleUrls: ['./informacoes-recebidas.component.css']
})
export class InformacoesRecebidasComponent implements OnInit {

  display = false;
  checked = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }

  aceite() {
    this.router.navigateByUrl('/cadastro-realizado');
  }

  paginaQuestionario() {
    this.router.navigateByUrl('/questionario');
  }


}
