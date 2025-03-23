import { Turma } from "./turma";

export class Professor {
	id!: number;
	nome!: string;
	email!: string;
	cpf!: string;
	especialidade!: string;
	turmas!: Turma[];
}
