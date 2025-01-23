import { useEffect, useState } from "react"
import { reqResApi } from "../api/reqRes";
import { ListaUsuario, Usuario } from '../interface/listaUsuarios';

export const Usuarios = () => {
    //Generar una arrego de usuario
    const [users, setUsers] = useState<Usuario[]>([]);
    useEffect(() => {
        // ejecutar peticion a la API
        reqResApi.get<ListaUsuario>('/users')
            .then(resp => {
                // console.log(resp.data.data);
                setUsers(resp.data.data)

            })
            .catch(console.log);

    }, []);

    //Funcion que repita las filas necesarias en la tabala para mostrar en los usuarios
    const itemRowsTable = ({first_name, last_name, email, avatar}: Usuario) => {
        //desestructuracion del objeto
        //const {}=Usuario
        return (
            
            <tr>
                <td>
                    <img src={avatar} alt="Avatar" />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>

        )
    }

    return (
        <div>
            <h3>Usuariossssss</h3>
            <table className="table table-striped table-border table-hover table-dark">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                {
                users.map((usuario ) => itemRowsTable(usuario))
                }
                </tbody>
            </table>
        </div>
    )
}
