import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from '../models/Tarefa';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  // @Input() tarefa!:Tarefa

  constructor() { }

  ngOnInit(): void {
  }

}
