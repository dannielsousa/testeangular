import { Injectable } from '@angular/core';

import { Questao } from './questao';
import { Campo } from './campo';

@Injectable()
export class QuestionarioService {
  
  getQuestoes() {
    

   // tslint:disable-next-line:quotemark
   let arrayPerguntas = [{"class":"ui-g-12 formatar-paragrafo","controlType":"label","label":"PERFIL DO INVESTIDOR - QUESTIONÁRIO","order":1},{"class":"ui-g-12 formatar-paragrafo","controlType":"label","label":"1 - Qual o seu comportamento em relação aos seus investimentos?","order":2},{"class":"ui-g-4 ui-md-12","controlType":"radio","name":"pergunta1","opcoes":[{"id":"radiobt1","class":"ui-g-4 formatar-input","texto":"PRESERVAR MEU DINHEIRO SEM CORRER RISCOS"},{"id":"radiobt2","class":"ui-g-4 formatar-input","texto":"GANHAR MAIS DINHEIRO ASSUMINDO RISCOS MODERADOS"},{"id":"radiobt3","class":"ui-g-4 formatar-input","texto":"GANHAR MAIS DINHEIRO ASSUMINDO RISCOS AGRESSIVOS"}],"order":3,"required":true,"key":"pergunta1"},{"controlType":"separador","order":4},{"class":"ui-g-12 formatar-paragrafo","controlType":"label","label":"2 - Por quanto tempo você deseja manter seus investimentos?","order":5},{"class":"ui-g-4 ui-md-12","controlType":"radio","name":"pergunta2","opcoes":[{"id":"radiobt4","class":"ui-g-4 formatar-input","texto":"ATÉ 1 ANO"},{"id":"radiobt5","class":"ui-g-4 formatar-input","texto":"DE 1 A 3 ANOS"},{"id":"radiobt6","class":"ui-g-4 formatar-input","texto":"DE 3 A 5 ANOS"}],"order":6,"required":true,"key":"pergunta2"},{"controlType":"separador","order":7},{"class":"ui-g-12 formatar-paragrafo","controlType":"label","label":"3 - Quantos % desses investimentos você pode precisar em um ano?","order":8},{"class":"ui-g-4 ui-md-12","controlType":"radio","name":"pergunta3","opcoes":[{"id":"radiobt7","class":"ui-g-4 formatar-input","texto":"ACIMA DE 75%"},{"id":"radiobt8","class":"ui-g-4 formatar-input","texto":"DE 26% A 74%"},{"id":"radiobt9","class":"ui-g-4 formatar-input","texto":"ATÉ 25%"}],"order":9,"required":true,"key":"pergunta3"},{"controlType":"separador","order":10},{"class":"ui-g-12 formatar-paragrafo","controlType":"label","label":"4 - Qual a sua familiaridade com os tipos de investimentos abaixo? Leve em consideração o valor aplicado nos ultimos 2 anos.","order":11},{"controlType":"dropdown","class":"ui-g-12 ui-md-12 ui-fluid","name":"pergunta4","opcoes":[{"value":"dropdown1","label":"Nunca Operei"},{"value":"dropdown2","label":"Opero pouco e não tenho familiaridade"},{"value":"dropdown3","label":"Opero eventualmente e conheço os riscos associados"},{"value":"dropdown4","label":"Opero frequentemente e conheço os riscos associados"}],"order":12,"required":true,"texto":"TITULOS DE RENDA FIXA OU TESOURO DIRETO","key":"pergunta4"},{"controlType":"dropdown","class":"ui-g-12 ui-md-12 ui-fluid","name":"pergunta5","opcoes":[{"value":"dropdown1","label":"Nunca Operei"},{"value":"dropdown2","label":"Opero pouco e não tenho familiaridade"},{"value":"dropdown3","label":"Opero eventualmente e conheço os riscos associados"},{"value":"dropdown4","label":"Opero frequentemente e conheço os riscos associados"}],"order":13,"required":true,"texto":"FUNDOS DE INVESTIMENTO","key":"pergunta5"},{"controlType":"dropdown","class":"ui-g-12 ui-md-12 ui-fluid","name":"pergunta6","opcoes":[{"value":"dropdown1","label":"Nunca Operei"},{"value":"dropdown2","label":"Opero pouco e não tenho familiaridade"},{"value":"dropdown3","label":"Opero eventualmente e conheço os riscos associados"},{"value":"dropdown4","label":"Opero frequentemente e conheço os riscos associados"}],"order":14,"required":true,"texto":"AÇÕES À VISTA","key":"pergunta6"},{"controlType":"dropdown","class":"ui-g-12 ui-md-12 ui-fluid","name":"pergunta7","opcoes":[{"value":"dropdown1","label":"Nunca Operei"},{"value":"dropdown2","label":"Opero pouco e não tenho familiaridade"},{"value":"dropdown3","label":"Opero eventualmente e conheço os riscos associados"},{"value":"dropdown4","label":"Opero frequentemente e conheço os riscos associados"}],"order":15,"required":true,"texto":"ALUGUEL DE AÇÕES, TERMOS, OPÇÕES E FUTUROS","key":"pergunta7"}];

    let questoes: Questao<any>[] = [];

    for (let i = 0; i < arrayPerguntas.length; i++) {
      questoes.push(new Campo(arrayPerguntas[i]));
    }

    return questoes.sort((a, b) => a.order - b.order);
  }
}
