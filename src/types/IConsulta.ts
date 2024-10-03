import {IProfissional} from "./IProfissional";

export default interface IConsulta {
    id: string,
    data: string,
    nome: string,
    especialista: IProfissional,
    paciente: IPaciente,
}

export interface IPaciente{
    nome:string,
    possuiPlanoSaude: boolean
}

// {
//     "id": "76d1fc68-bd41-4b50-b4b9-169d086d2d54",
//     "data": "2024-10-15T18:00:00.000Z",
//     "desejaLembrete": false,
//     "lembretes": null,
//     "motivoCancelamento": null,
//     "especialista": {
//         "nome": "Alex",
//         "crm": "5455576",
//         "imagem": "https://github.com/alexfelipe.png",
//         "estaAtivo": true,
//         "especialidade": "cardiologia",
//         "email": "alex@gmail.com",
//         "telefone": "40028922",
//         "possuiPlanoSaude": true,
//         "planosSaude": [
//             "Unimed",
//             "Bradesco",
//             "Sulamerica"
//         ],
//         "role": "ESPECIALISTA",
//         "id": "5ecda3fc-feba-4c46-9bb1-4c3478ab83a3",
//         "avaliacoes": []
//     },
//     "paciente": {
//         "cpf": "48605305860",
//         "nome": "Victor Leça",
//         "email": "vlecabr@gmail.com",
//         "estaAtivo": true,
//         "telefone": 16988647864,
//         "planosSaude": [
//             "Amil",
//             "Bradesco"
//         ],
//         "imagem": "https://github.com/vLecaBR.png",
//         "historico": null,
//         "role": "PACIENTE",
//         "id": "86e35766-90d3-43e7-a7d1-e4048203a602",
//         "possuiPlanoSaude": true
//     }
// },