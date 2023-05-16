import { useEffect, useState } from "react"

const Questao02 = () => {
    // Duas variaveis de estado, uma para receber a imagem do pokemon e outra para ser usada quando o pokemon estuver de costas
    const [img, setImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");
    const [flag, setFlag] = useState(false);

    // useEffect sendo utilizado como hook para quando a variavel flag for alterada a pagina ser recarregada
    useEffect(
        ()=>{
            if(flag == false){
                setImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png");
            }else{
                setImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/93.png");
            }
        },
        [flag]
    )

    // Parte a ser renderizada da pagina com a imagem do pokemon e um botao para vira-lo
    return(
        <>
            <img src={img} style={{ width: "300px"}} />

            <button onClick={()=>{setFlag((prev)=> prev = !prev)}}>
                Virar pokemon
            </button>
        </>
    )
}

export default Questao02