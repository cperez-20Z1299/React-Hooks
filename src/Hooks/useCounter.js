import { useState } from "react"

export const useCounter = ( valorInicial = 502) => {
  
    const [contador, setContador] = useState(valorInicial);

    const incrementar = () => {
        setContador( contador +1);
    }

    const decrementar = () => {
        setContador(contador -1);
    }

    const resetear = () => {
        setContador(valorInicial);
    }

    //con el return se pueden retornar objetos, funciones y 
    return{
        contador,
        incrementar,
        decrementar,
        resetear
    }

}
