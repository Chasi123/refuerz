//Creando nuestro propio hook

import { useState } from "react";

export const useCounter = () => {

    const [valor, setValor] = useState<number>(0);

    const contador = (numero: number): void => {
        setValor(valor + numero)
    }
    const borrar = (numero: number): void => {
        setValor(valor * numero)
    }

    return {
        valor,
        contador,
        borrar
    }

}


