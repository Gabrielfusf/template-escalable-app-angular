export interface Medicos {
    CRM: string;
    created_date: string;
    email: string;
    especialidade: string;
    id_usuario: number;
    id_usuario_medico: number;
    nome: string;
    status: string;

}

export interface Medico {
    nome: string;
    sexo: string;
    data_nascimento: string;
    email:string;
    usuario:string;
    password:string;
    CPF:string;
    RG:string;
    CRM:string;
    especialidade:string;
    id_usuario: number;
    id_usuario_medico: number;
    isADM: boolean;
    status: string;
}

export interface isADMtype {
    value: boolean,
    label: string;
}

export interface sexoType {
    value: string,
    label: string;
}