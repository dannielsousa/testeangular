import { Injectable } from '@angular/core';

import { Questao } from './questao';
import { Campo } from './campo';

@Injectable()
export class QuestionarioService {
  
  getQuestoes() {
    

   let arrayPerguntas = [{"controlType":"label","label":"PERFIL DO INVESTIDOR - QUESTIONÁRIO","order":1,"class":"ui-g-12 formatar-paragrafo"},{"controlType":"label","label":"1 - Qual o seu comportamento em relação aos seus investimentos?","order":2,"class":"ui-g-12 formatar-paragrafo"},{"controlType":"radio","order":3,"name":"pergunta1","class":"ui-g-4","required":true,"opcoes":[{"id":"radiobt1","class":"ui-g-4 formatar-input","texto":"PRESERVAR MEU DINHEIRO SEM CORRER RISCOS"},{"id":"radiobt2","class":"ui-g-4 formatar-input","texto":"GANHAR MAIS DINHEIRO ASSUMINDO RISCOS MODERADOS"},{"id":"radiobt3","class":"ui-g-4 formatar-input","texto":"GANHAR MAIS DINHEIRO ASSUMINDO RISCOS AGRESSIVOS"}]},{"controlType":"separador","order":4},{"controlType":"label","label":"2 - Por quanto tempo você deseja manter seus investimentos?","order":5,"class":"ui-g-12 formatar-paragrafo"},{"controlType":"radio","order":6,"name":"pergunta2","class":"ui-g-4","required":true,"opcoes":[{"id":"radiobt4","class":"ui-g-4 formatar-input","texto":"ATÉ 1 ANO"},{"id":"radiobt5","class":"ui-g-4 formatar-input","texto":"DE 1 A 3 ANOS"},{"id":"radiobt6","class":"ui-g-4 formatar-input","texto":"DE 3 A 5 ANOS"}]},{"controlType":"separador","order":7},{"controlType":"label","label":"3 - Quantos % desses investimentos você pode precisar em um ano?","order":8,"class":"ui-g-12 formatar-paragrafo"},{"controlType":"radio","order":9,"name":"pergunta3","class":"ui-g-4","required":true,"opcoes":[{"id":"radiobt7","class":"ui-g-4 formatar-input","texto":"ACIMA DE 75%"},{"id":"radiobt8","class":"ui-g-4 formatar-input","texto":"DE 26% A 74%"},{"id":"radiobt9","class":"ui-g-4 formatar-input","texto":"ATÉ 25%"}]},{"controlType":"separador","order":10},{"controlType":"label","label":"4 - Qual a sua familiaridade com os tipos de investimentos abaixo? Leve em consideração o valor aplicado nos ultimos 2 anos.","order":11,"class":"ui-g-12 formatar-paragrafo"},{"controlType":"dropdown","texto":"TITULOS DE RENDA FIXA OU TESOURO DIRETO","order":12,"class":"ui-g-12 ui-fluid","required":true,"key":"checkbox1","opcoes":[{"value":"1","label":"Nunca Operei"},{"value":"2","label":"Opero pouco e não tenho familiaridade"},{"value":"3","label":"Opero eventualmente e conheço os riscos associados"},{"value":"4","label":"Opero frequentemente e conheço os riscos associados"}]},{"controlType":"dropdown","texto":"FUNDOS DE INVESTIMENTO","order":13,"class":"ui-g-12 ui-fluid","required":true,"key":"checkbox2","opcoes":[{"value":"1","label":"Nunca Operei"},{"value":"2","label":"Opero pouco e não tenho familiaridade"},{"value":"3","label":"Opero eventualmente e conheço os riscos associados"},{"value":"4","label":"Opero frequentemente e conheço os riscos associados"}]},{"controlType":"dropdown","texto":"AÇÕES À VISTA","order":14,"class":"ui-g-12 ui-fluid","required":true,"key":"checkbox3","opcoes":[{"value":"1","label":"Nunca Operei"},{"value":"2","label":"Opero pouco e não tenho familiaridade"},{"value":"3","label":"Opero eventualmente e conheço os riscos associados"},{"value":"4","label":"Opero frequentemente e conheço os riscos associados"}]},{"controlType":"dropdown","texto":"ALUGUEL DE AÇÕES, TERMOS, OPÇÕES E FUTUROS","order":15,"class":"ui-g-12 ui-fluid","required":true,"key":"checkbox4","opcoes":[{"value":"1","label":"Nunca Operei"},{"value":"2","label":"Opero pouco e não tenho familiaridade"},{"value":"3","label":"Opero eventualmente e conheço os riscos associados"},{"value":"4","label":"Opero frequentemente e conheço os riscos associados"}]}];

    let questoes: Questao<any>[] = [];

    for (let i = 0; i < arrayPerguntas.length; i++) {
      questoes.push(new Campo(arrayPerguntas[i]));
    }

    return questoes.sort((a, b) => a.order - b.order);
  }
}
