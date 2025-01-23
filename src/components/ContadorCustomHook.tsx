import { useCounter } from "../hooks/useCounter"

export const ContadorCustomHook = () => {

    //llamar a nusetro custom hook
    //accedemos a los valores de retrono 
    const { valor, contador, borrar } = useCounter();

    return (
        <div>
            <h3>Contador custom hook: <small>{valor}</small></h3>
            <button
                className="btn btn-primary"
                onClick={() => contador(1)}>+1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={() => contador(-1)}>-1
            </button>
            <button
                className="btn btn-primary"
                onClick={() => borrar(0)}>limpiar
            </button>
        </div>
    )
}
