export const Funciones = () => {
    //funciones
    //funcion sin parametros

    /* const sumar = (): number => {
    return 1 + 2;
    }*/
    //  funcion con parametros
    const sumar = (num1: number, num2: number): number => {
        return num1 + num2;
    }
    //metodo void
    /*const informacion = (): void => {
        console.log("hola")
    }*/

    return (
        <div>
            <h3>Funciones</h3>
            <span>El resultado es: {sumar(5, 6)}</span>
        </div>
    )
}
