import { Component } from '@angular/core';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-carros-list',
  standalone: true,
  imports: [],
  templateUrl: './alunos-list.component.html',
  styleUrl: './alunos-list.component.scss',
})
export class AlunosListComponent {

  lista: Aluno[] = [];

  constructor() {
    this.findAll();
  }


  findAll(){
    this.lista = [
      { id: 1, nome: 'João Silva', cpf: '123.456.789-00', telefone: '(11) 1111-1111', cadastroCompleto: true },
      { id: 2, nome: 'Maria Souza', cpf: '987.654.321-00', telefone: '(21) 2222-2222', cadastroCompleto: false },
    ];
  }

  delete(aluno: Aluno){
    let indice = this.lista.findIndex(x => x.id === aluno.id);
    if(confirm('Deseja deletar esse aluno?')){
      this.lista.splice(indice, 1);
    }
  }


}