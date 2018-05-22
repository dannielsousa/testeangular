import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacoesRecebidasComponent } from './informacoes-recebidas/informacoes-recebidas.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { CadastroRealizadoComponent } from './cadastro-realizado/cadastro-realizado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ButtonModule } from 'primeng/components/button/button';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    CheckboxModule,
    FormsModule,
    RadioButtonModule,
    DropdownModule,
    ReactiveFormsModule 
  ],
  declarations: [
    InformacoesRecebidasComponent, 
    QuestionarioComponent, 
    CadastroRealizadoComponent
  ]
})
export class PerfilInvestidorModule { }
