import { useState } from "react"

export const CounterApp = () => {

    const [stateCount, setContador] = useState({
        contadorA: 10,
        contadorB: 20,
        contadorC: 30
    });
    
    const {contadorA, contadorB, contadorC} = stateCount;

    const incrementar = () => {
        setContador({
            ...stateCount,
            contadorA: contadorA +1,
            contadorB: contadorB +1,
            contadorC: contadorC +1})
    }

    return (

        <>
            <div className="container">
                <h1>CounterApp</h1>
                <hr />
                <h3>contador en: {contadorA}</h3>
                <h3>contador en: {contadorB}</h3>
                <h3>contador en: {contadorC}</h3>
                <button className="btn btn-primary" onClick={incrementar}>+1</button>
            </div>
        </>
    )
}
