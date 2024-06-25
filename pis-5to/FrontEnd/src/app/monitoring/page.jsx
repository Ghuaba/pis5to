'use client';
import Link from 'next/link';
import { list_monitoring } from '@/hooks/Service_monitoring';
import Cookies from 'js-cookie';
import { useState, useEffect } from "react";
import swal from 'sweetalert';

import { useRouter } from 'next/navigation';
import './styles.css'; // Importar estilos locales

export default function Monitoring() {

    const router = useRouter();
    const [persons, setPersons] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Estado para controlar si está autenticado
    console.log("desde aquiii es ");

    useEffect(() => {
        /*const token = Cookies.get('token');
        if (!token) {
            setIsLoggedIn(false); // Si no hay token, establece que no está autenticado
            return;
        }
        */

        list_monitoring(/*token*/).then((info) => {
            //console.log("aqui va la info" + info.datos);
            if (info.code === 200) {
                setPersons(info.datos);
                console.log("desde aquiii es ");
                console.log("mensaje de aqui");
                console.log(info.datos);
            } else {
                setIsLoggedIn(false); // Si hay un problema con el token, establece que no está autenticado
            }
        }).catch(() => {
            setIsLoggedIn(false); // En caso de error, también establece que no está autenticado
        });
    }, []);

    const format_fecha = (fecha) => {
        const date = new Date(fecha);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    
/*
    if (!isLoggedIn) {
        // Redirigir a la página de inicio de sesión si no está autenticado
        swal({
            title: 'Error',
            text: 'Vuelva a Iniciar Sesion',
            icon: "error",
            button: "Accept",
            timer: 8000,
            closeOnEsc: true
        });
        Cookies.remove('token');
        Cookies.remove('user');
        router.push('/session'); // Asegúrate de tener la ruta correcta para iniciar sesión
        return null; // O puedes mostrar un mensaje aquí antes de redirigir
    }
*/
    return (
        <div className="person-page">
            <main className="container text-center mt-5">
                <div className="container-fluid">

                    <div className="btn-new-container">
                        <Link href="/productos/new" className="btn btn-info btn-new">Nuevo</Link>
                    </div>
                    <table className="table table-hover person-table">
                        <thead className="table-dark">
                            <tr>
                                <th>Nro</th>
                                <th>TipoSensor</th>
                                <th>Data</th>
                                <th>StartDate</th>
                                <th>EndDate</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {persons && persons.map((dato, i) => (
                                <tr key={i} className="monitoring-row">
                                    <td>{i + 1}</td>
                                    <td>{dato.sensor_id.element_type}</td>
                                    <td>{dato.data}</td>
                                    <td>{format_fecha(dato.start_date)}</td>
                                    <td>{format_fecha(dato.end_date)}</td>
                                    <td>{dato.latitude}</td>
                                    <td>{dato.longitude}</td>
                                    <td>
                                        <Link href={'/monitoring/' + dato.uid} className="btn btn-warning btn-modificar">Modify</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
