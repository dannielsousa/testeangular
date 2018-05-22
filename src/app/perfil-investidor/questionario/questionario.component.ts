import { ControleDeQuestoesService } from './controle-de-questoes.service';
import { QuestionarioService } from './questionario.service';
import { Questao } from './questao';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css'],
  providers: [
    QuestionarioService,
    ControleDeQuestoesService
  ]
})

export class QuestionarioComponent implements OnInit {

  questoes: any[];
  form: FormGroup;
  payLoad = '';


  constructor(
    private service: QuestionarioService, 
    private cdq: ControleDeQuestoesService
  ) {}

  ngOnInit() {
    this.questoes = this.service.getQuestoes();
    this.form = this.cdq.toFormGroup(this.questoes);
  }

  onSubmit() {
    console.log(this.form.value);
  }

  get isValid() { 
    console.log(this.form.valid);
    return this.form.valid; }

}
