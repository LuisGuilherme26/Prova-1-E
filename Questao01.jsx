import { useEffect } from "react";

const Questao01A = () => {

    // Criação de um vetor em que cada posição exsite um objeto
    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
    ]
    
    // Vetor sendo passado via props para outro componente
    return (
        <>
            <Questao01B alunos={alunos}/>
        </>
    )
}

function Questao01B({alunos}) {
    
    let medias = new Array(3);

    // Um hook do tipo useEffect para calcular as medias de cada aluno
    useEffect(
        () =>{
            // Cada calculo é armazenado em uma posição de um vetor criado anteriormente
            medias[0] = (alunos[0].notas.ap1 + alunos[0].notas.ap2)/2;
            medias[1] = (alunos[1].notas.ap1 + alunos[1].notas.ap2)/2;
            medias[2] = (alunos[2].notas.ap1 + alunos[2].notas.ap2)/2;
        }
    )

    return medias

}

export {Questao01A, Questao01B}