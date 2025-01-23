import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {
    //hook UseState: permite cambiar el estado de una variable, arreglo etc
    const [bandera, setBandera] = useState<boolean>(false)

    //cambiar el estado de la variable bandera
    const cambiarBanadera = () => {
        setBandera(!bandera);
    }

    //hook useEffect: permite ejecutar efectos secundarios en componentes funcionales
    //1. se ejecuta cada vex que el componente se renderiza : el componente se carga
    //2. se ejecuta cuando existe una lista de dependencias
    useEffect(() => {
        //codigo a ejecutar
        console.log('desde el useEffect');

    }, [bandera])//lista de dependencias


    return (
        <div>
            <h3>Hook - UseEffect</h3>
            <button
                onClick={cambiarBanadera}>Cambiar
            </button>
        </div>
    )
}
