import { Aluno } from './aluno';
import { Curso } from './curso';
import { Professor } from './professor';
export class Turma {
	id!: number;
	nome!: string;
	ano!: number;
	semestre!: number;
	turno!: string;
	alunos!: Aluno[];
	curso!: Curso;
	professores!: Professor[];
}
