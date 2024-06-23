'use client';

import { all_Sensor } from '@/hooks/service_sensor';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import './signStyle.css'; // Ensure this path is correct

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Sensor() {
    const [Sensors, setSensors] = useState(null);
    const [estado, setEstado] = useState(false);
    const router = useRouter();
    let token = Cookies.get('token');

    useEffect(() => {
        if (!estado) {
            all_Sensor(token).then((info) => {
                if (info.code === 200) {
                    setSensors(info.datos);
                } else if (info.code === 401) {
                    console.log(info.code);
                    router.push('/dashboard');
                }
            });
            setEstado(true);
        }
    }, [estado, token, router]);

    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image vh-100' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
            <MDBCard className='m-5' style={{ maxWidth: '3000px' }}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-7">Lista de Sensores</h2>
                    <MDBTable striped hover small>
                        <MDBTableHead>
                            <tr>
                                <th>NRO</th>
                                <th>NOMBRE</th>
                                <th>IP</th>
                                <th>ESTADO</th>
                                <th>TIPO DE ELEMENTO</th>
                                <th>ACCIONES</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {Sensors && Sensors.map((dato, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{dato.name}</td>
                                    <td>{dato.ip}</td>
                                    <td>{dato.status}</td>
                                    <td>{dato.element_type.toString()}</td>
                                    <td>
                                        <Link href={'/sensor/' + dato.uid} passHref>
                                            <MDBBtn color='warning'>Modificar</MDBBtn>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </MDBTableBody>
                    </MDBTable>
                    <div className="d-flex justify-content-end">
                        <Link href="/sensor/new" passHref>
                            <MDBBtn color='dark' style={{ margin: "10px" }}>Ingresar nuevo Sensor</MDBBtn>
                        </Link>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}