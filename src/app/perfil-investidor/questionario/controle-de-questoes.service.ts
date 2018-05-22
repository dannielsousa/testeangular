import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Questao } from './questao';

@Injectable()
export class ControleDeQuestoesService {
  constructor() {}

    toFormGroup(questoes: Questao<any>[]) {
      let group: any = {};

      questoes.forEach(
        questao => { group[questao.key] = questao.required ? new FormControl(questao.value || '', Validators.required) : new FormControl(questao.value || '');
      });

      return new FormGroup(group);
  }
}
