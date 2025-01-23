export const ObjetosLiterales = () => {

    //Interface
    interface Persona {
        nombreCompleto: string;
        apellido: string;
        edad: number;
        direccion: Direccion;
    }

    interface Direccion{
        pais: string;
        casaNumero: number

    }

    //Objeto
    const persona: Persona = {
        nombreCompleto: 'Chris Chasi',
        apellido: 'Chasi',
        edad: 32,
        direccion: {
            pais: 'Ecuador',
            casaNumero: 365
        }
    }

    //ingresar a las propiedades del objeto
    persona.nombreCompleto = 'aaaaaaaaaaaaaaaaaaaaa'
    //no se puede isntanciar las iterfaces
    //const personaObj = new Persona();
    return (
        <div>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}
