import { QuestionarioService } from './questionario.service';
import { Questao } from './questao';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css'],
  providers: [ QuestionarioService ]
},

)

export class QuestionarioComponent {
  @Input() question: Questao<any>;
  

  questoes: any[];

  form = new FormGroup({
    firstName: new FormControl()
  });

  constructor(service: QuestionarioService) {
    this.questoes = service.getQuestoes();
   }
   salvar(f) {
     console.log(f);
   }
}
