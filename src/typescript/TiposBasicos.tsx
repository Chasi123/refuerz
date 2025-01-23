export const TiposBasicos = () => {
    //variable
    //let nombre: string | number='Chris';
    const nombre: string = 'Chris';
    const edad: number = 32;
    const donanteOrganos: boolean = false;
    //arreglos
    const poderes: string[] = ['velocidad', 'volar', 'invisibilidad'];
    //agregar datos en los arreglos
    poderes.push('fuerza')

    return (
        <div>
            <h3>Tipos Basicos</h3>
            {nombre}, {edad}, {donanteOrganos ? 'donante' : 'no donante'},
            <br />
            {poderes.join(', ')}
        </div>
    )
}
