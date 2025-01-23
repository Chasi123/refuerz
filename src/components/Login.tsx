import { useEffect, useReducer } from "react"

export const Login = () => {
    //interface estado de autenticacion
    interface AuthState {
        validando: boolean,
        token: string | null,
        userName: string,
        password: string
    }

    //creando estado inicial - segundo parametro
    const inicialState: AuthState = {
        validando: true,
        token: null,
        userName: '',
        password: ''
    }

    //Type para los parametros de las acciones
    type LoginPayload = {
        userName: string,
        pasword: string
    }

    //posibles acciones que se puede realizar
    type AuthAction =
        { type: 'logout' }
        | { type: 'login', payload: LoginPayload }


    //creando funcion reducer - primer parametro
    const authReducer = (state: AuthState, action: AuthAction): AuthState => {
        switch (action.type) {
            case 'logout':
                return {
                    validando: false,
                    token: null,
                    userName: '',
                    password: ''
                }
            case 'login':
                //Desestructuracion de obejetos
                const { userName, pasword } = action.payload;
                return {
                    validando: false,
                    token: 'ERtaslkgjdasgbjñl1::_2345689asfdsafdsfdsfgds',
                    userName: userName,
                    password: pasword
                }
            default:
                return state;
        }

    }


    //hook useReducer: permite el cambio de estados mas complejos
    const [state, dispatch] = useReducer(authReducer, inicialState);

    //hook useEffect: permite ejevutar efectos secundarios en componentes funcionales
    useEffect(() => {
        //funcion de tiempo
        setTimeout(() => {
            //Disparanddo la accion
            dispatch({ type: 'logout' })
        }, 1500);// milisegundos
    }, []);

    //funcion para disparar la accion de login
    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                userName: 'chasi',
                pasword: '123'
            }
        })
    }
    //funcion para disparar la accion de logout

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    //implementar una validacion para mostrar los mensajes en componentes funcionales
    if (state.validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )

    }

    return (
        <div>
            <h3>Login</h3>
            {(state.token == null)
                ? <div className="alert alert-danger">No autenticado...</div>
                : <div className="alert alert-primary">Autenticado...</div>
            }
            {(state.token == null)
                ? <button className="btn btn-primary" onClick={login}>Login</button>
                : <button className="btn btn-danger" onClick={logout} >Logout</button>
            }
        </div>
    )
}

