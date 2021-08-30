import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeTarefasComponent } from './components/lista-de-tarefas/lista-de-tarefas.component';
import { InputComponent } from './components/input/input.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeTarefasComponent,
    InputComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
