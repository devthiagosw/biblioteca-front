import { Turma } from "./turma";

export class Curso {
	id!: number;
	nome!: string;
	turmas!: Turma[]; // substitua "any" pelo tipo Turma, se disponível
}
