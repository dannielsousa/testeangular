import { Component, OnInit } from '@angular/core';

import { RespostaService } from './../questionario/respotas.service';
import { PerguntaResposta } from './pergunta-resposta';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-realizado',
  templateUrl: './cadastro-realizado.component.html',
  styleUrls: ['./cadastro-realizado.component.css']
})

export class CadastroRealizadoComponent implements OnInit {

  arrayPerguntas = [{ "class": "ui-g-12 formatar-paragrafo", "controlType": "label", "label": "PERFIL DO INVESTIDOR - QUESTIONÁRIO", "order": 1 }, { "class": "ui-g-12 formatar-paragrafo", "controlType": "label", "label": "1 - Qual o seu comportamento em relação aos seus investimentos?", "order": 2, "question": true }, { "class": "ui-g-4 ui-md-12", "controlType": "radio", "name": "pergunta1", "opcoes": [{ "value": "radiobt1", "class": "ui-g-4 formatar-input", "label": "PRESERVAR MEU DINHEIRO SEM CORRER RISCOS" }, { "value": "radiobt2", "class": "ui-g-4 formatar-input", "label": "GANHAR MAIS DINHEIRO ASSUMINDO RISCOS MODERADOS" }, { "value": "radiobt3", "class": "ui-g-4 formatar-input", "label": "GANHAR MAIS DINHEIRO ASSUMINDO RISCOS AGRESSIVOS" }], "order": 3, "required": true, "key": "pergunta1" }, { "controlType": "separador", "order": 4 }, { "class": "ui-g-12 formatar-paragrafo", "controlType": "label", "label": "2 - Por quanto tempo você deseja manter seus investimentos?", "order": 5, "question": true }, { "class": "ui-g-4 ui-md-12", "controlType": "radio", "name": "pergunta2", "opcoes": [{ "value": "radiobt4", "class": "ui-g-4 formatar-input", "label": "ATÉ 1 ANO" }, { "value": "radiobt5", "class": "ui-g-4 formatar-input", "label": "DE 1 A 3 ANOS" }, { "value": "radiobt6", "class": "ui-g-4 formatar-input", "label": "DE 3 A 5 ANOS" }], "order": 6, "required": true, "key": "pergunta2" }, { "controlType": "separador", "order": 7 }, { "class": "ui-g-12 formatar-paragrafo", "controlType": "label", "label": "3 - Quantos % desses investimentos você pode precisar em um ano?", "order": 8, "question": true }, { "class": "ui-g-4 ui-md-12", "controlType": "radio", "name": "pergunta3", "opcoes": [{ "value": "radiobt7", "class": "ui-g-4 formatar-input", "label": "ACIMA DE 75%" }, { "value": "radiobt8", "class": "ui-g-4 formatar-input", "label": "DE 26% A 74%" }, { "value": "radiobt9", "class": "ui-g-4 formatar-input", "label": "ATÉ 25%" }], "order": 9, "required": true, "key": "pergunta3" }, { "controlType": "separador", "order": 10 }, { "class": "ui-g-12 formatar-paragrafo", "controlType": "label", "label": "4 - Qual a sua familiaridade com os tipos de investimentos abaixo? Leve em consideração o valor aplicado nos ultimos 2 anos.", "order": 11 }, { "controlType": "dropdown", "class": "ui-g-12 ui-md-12 ui-fluid", "name": "pergunta4", "opcoes": [{ "value": "dropdown1", "label": "Nunca Operei" }, { "value": "dropdown2", "label": "Opero pouco e não tenho familiaridade" }, { "value": "dropdown3", "label": "Opero eventualmente e conheço os riscos associados" }, { "value": "dropdown4", "label": "Opero frequentemente e conheço os riscos associados" }], "order": 12, "question": true, "required": true, "label": "TITULOS DE RENDA FIXA OU TESOURO DIRETO", "key": "pergunta4" }, { "controlType": "dropdown", "class": "ui-g-12 ui-md-12 ui-fluid", "name": "pergunta5", "opcoes": [{ "value": "dropdown5", "label": "Nunca Operei" }, { "value": "dropdown6", "label": "Opero pouco e não tenho familiaridade" }, { "value": "dropdown7", "label": "Opero eventualmente e conheço os riscos associados" }, { "value": "dropdown8", "label": "Opero frequentemente e conheço os riscos associados" }], "order": 13, "question": true, "required": true, "label": "FUNDOS DE INVESTIMENTO", "key": "pergunta5" }, { "controlType": "dropdown", "class": "ui-g-12 ui-md-12 ui-fluid", "name": "pergunta6", "opcoes": [{ "value": "dropdown9", "label": "Nunca Operei" }, { "value": "dropdown10", "label": "Opero pouco e não tenho familiaridade" }, { "value": "dropdown11", "label": "Opero eventualmente e conheço os riscos associados" }, { "value": "dropdown12", "label": "Opero frequentemente e conheço os riscos associados" }], "order": 14, "question": true, "required": true, "label": "AÇÕES À VISTA", "key": "pergunta6" }, { "controlType": "dropdown", "class": "ui-g-12 ui-md-12 ui-fluid", "name": "pergunta7", "opcoes": [{ "value": "dropdown13", "label": "Nunca Operei" }, { "value": "dropdown14", "label": "Opero pouco e não tenho familiaridade" }, { "value": "dropdown15", "label": "Opero eventualmente e conheço os riscos associados" }, { "value": "dropdown16", "label": "Opero frequentemente e conheço os riscos associados" }], "order": 15, "question": true, "required": true, "label": "ALUGUEL DE AÇÕES, TERMOS, OPÇÕES E FUTUROS", "key": "pergunta7" }];

  constructor(
    public respostaService: RespostaService,
    private router: Router,
  ) { }


  perguntas = [];
  perguntasRespostas: Array<PerguntaResposta> = [];

  ngOnInit() {

    if (this.respostas) {
      this.respostas.splice(0, 1)

      for (let i = 0; i < this.arrayPerguntas.length; i++) {
        if (this.arrayPerguntas[i].question === true) {
          this.perguntas.push(this.arrayPerguntas[i].label);
        }
      }

      for (let i = 0; i < this.perguntas.length; i++) {
        let customObj = new PerguntaResposta();
        customObj.pergunta = this.perguntas[i];
        customObj.resposta = this.respostas[i];
        this.perguntasRespostas.push(customObj);
      }
    }
  }

  voltar() {
    this.router.navigateByUrl('/informacoes-recebidas');
  }

  get respostas() {
    return this.respostaService.respostaData; 
  }

  set respostas(value: any) {
    this.respostaService.respostaData = value;
  }

}
