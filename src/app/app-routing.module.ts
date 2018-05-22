import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroRealizadoComponent } from './perfil-investidor/cadastro-realizado/cadastro-realizado.component';
import { InformacoesRecebidasComponent } from './perfil-investidor/informacoes-recebidas/informacoes-recebidas.component';
import { QuestionarioComponent } from './perfil-investidor/questionario/questionario.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: '', redirectTo: 'informacoes-recebidas', pathMatch: 'full'},
  { path: 'informacoes-recebidas', component: InformacoesRecebidasComponent },
  { path: 'cadastro-realizado', component: CadastroRealizadoComponent },
  { path: 'questionario', component: QuestionarioComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
