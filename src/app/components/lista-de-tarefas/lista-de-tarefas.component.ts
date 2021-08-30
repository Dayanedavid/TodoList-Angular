import { Component, OnInit } from '@angular/core';
import { Prioridade, Tarefa } from '../models/Tarefa';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

  tarefas:Tarefa [] = [
    {feita:false,
      texto: "Limpar a casa",
      prioridade: Prioridade.Alta,
    },
    {feita:false,
      texto: "Lazer",
      prioridade: Prioridade.Alta,
    },
    {feita:true,
      texto: "Fazer a janta",
      prioridade: Prioridade.Baixa,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
