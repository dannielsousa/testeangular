import { RespostaService } from './respotas.service';
import { ControleDeQuestoesService } from './controle-de-questoes.service';
import { QuestionarioService } from './questionario.service';
import { Questao } from './questao';
import { Component, OnInit, Input, NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  pergunta4: string;
  pergunta5: string;
  pergunta6: string;
  pergunta7: string;

  constructor(
    private questionarioService: QuestionarioService, 
    private cdq: ControleDeQuestoesService,
    private router: Router,
    public respostaService: RespostaService
  ) {}

  ngOnInit() {
    this.questoes = this.questionarioService.getQuestoes();
    this.form = this.cdq.toFormGroup(this.questoes);
  }

  onSubmit() {
    this.respostas = Object.values(this.form.value);
    this.router.navigateByUrl('/cadastro-realizado');
  }

  voltar() {
    this.router.navigateByUrl('/informacoes-recebidas');
  }

  get isValid() { 
    return this.form.valid; 
  }

  get respostas() {
    return this.respostaService.respostaData;
  }

  set respostas(value: any) {
    this.respostaService.respostaData = value;
  }
}
