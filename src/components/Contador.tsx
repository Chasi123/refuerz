import { useState } from "react"
export const Contador = () => {


    //hook useState: permite el cambio de esatdo de un componente, variable, constante etc.
    //1. variable, arreglo,  etc
    //2. funcion que cambua el estado variable, arreglo etc.

    const [valor, setValor] = useState<number>(0);//() valor inicial de la variable, arreglo, etc.

    //Cambiar estado mediante funcion
    const contador = (numero: number): void => {
        setValor(valor + numero)
    }

    const menos = (numero: number): void => {
        setValor(valor - numero)
    }
    return (
        <div>
            <h3>Contador: <small>{valor}</small></h3>
            <button className="btn btn-primary"
            onClick={() => contador(1)}>+1
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => menos(1)}>-1</button>
        </div>
    )
}
