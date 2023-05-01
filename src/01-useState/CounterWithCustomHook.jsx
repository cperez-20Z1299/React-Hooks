import { useCounter } from "../Hooks/useCounter"

export const CounterWithCustomHook = () => {

    //Lammar a un Hook personalizado de la carpeta hooks
    const { contador, incrementar, decrementar, resetear } = useCounter();

  return (

    <>
        <div className="container">
            <h1>CounterWithCustomHook: {contador} </h1>
            <hr />
            <button className="btn btn-primary" onClick={incrementar}> +1</button>
            <button className="btn btn-warning" onClick={resetear}> reset</button>
            <button className="btn btn-danger" onClick={decrementar}> -1</button>
        </div>
    </>
    
  )
}
