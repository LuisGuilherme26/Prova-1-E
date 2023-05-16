import { useEffect, useState } from "react"

const Questao03 = () => {

    // Variaveis de estado para armazenar a maior e menor cidade
    const [maiorP, setmaiorP] = useState("");
    const [menorP, setmenorP] = useState("");

    // Utilizando o hook para usar o fetch pois a documentação recomenda
    useEffect(
        () => {
            // try catch sendo utilizado por se tratar de uma promessa
            try {
                fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
                    .then(
                        (response) => {
                            return response.json()
                        }
                    )
                    .then(
                        (data) => {
                            for (let i = 1; i <= data.length; i++) {
                                if (data[i].population > data[i - 1].population) {
                                    setmaiorP(data[i].capital[0]);
                                }
                                if (data[i].population < data[i - 1].population) {
                                    setmenorP(data[i].capital[0]);
                                }
                            }
                        }
                    )
                    .catch(error => console.log(error))
            } catch (error) {
                console.log(error)
            }
        },
        []
    )

    // Renderizando o código na tela principal;
    return (
        <>
            <h1>Maior população: {maiorP}</h1>
            <h1>Menor população: {menorP}</h1>
        </>
    )

}


export default Questao03;