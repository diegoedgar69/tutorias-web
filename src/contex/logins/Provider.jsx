import Swal from 'sweetalert2'

import LoginsContext from "./index";
import apiCall from "../../api";

export default function UsersProvider({children}) {
    const Toast = Swal.mixin({toast: true, position: 'bottom-end', showConfirmButton: false, timer: 750})

    async function logout() {
        try {
            localStorage.removeItem('user');
            await Toast.fire({icon: 'success', title: 'sesion cerrada'})
        } catch (error) {
            await Toast.fire({icon: 'error', title: 'Error al cerrar sesion'})
        }
    }

    async function getSesion(log) {
        try {
            let resultUser = await apiCall({url: "login", body: log});
            if (resultUser !== null) {
                localStorage.setItem('user', JSON.stringify(resultUser));
                return resultUser
            } else {
                localStorage.removeItem('user');
                return null
            }
        } catch (error) {
            localStorage.setItem('user', null);
            return null
        }
    }

    return (<LoginsContext.Provider value={{logout, getSesion}}>
        {children}
    </LoginsContext.Provider>)
}
