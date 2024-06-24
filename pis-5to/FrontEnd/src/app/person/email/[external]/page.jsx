'use client';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import './signStyle.css';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';
import { modify_person_email, search_person } from '../../../../hooks/service_person';
//para llenar datos dentro de los let [estado, setEstado]
import { useState } from 'react';
import Cookies from 'js-cookie';

export default function modifyPersonEmail({params}) {
    const token = Cookies.get('token');
    const router = useRouter();

    //datos del usuario
    let [estado, setEstado] = useState(false);
    let [person, setPerson] = useState(null);

    if (!estado){
        search_person(params.external, token).then((info) => {
            if(info.code == 200){
                setPerson(info.datos);
            }
            else{
                swal({
                    title: "Error",
                    text: info.response.data.info.error,
                    icon: "error",
                    button: "Aceptar",
                    timer: 8000,
                    closeOnEsc: true
                });
            }
        });
        setEstado(true);
    }

    //validación de campos 
    const validationSchema = yup.object().shape({
        email: yup.string().required('Campo obligatorio'),
        password: yup.string().required('Campo obligatorio')
    });
    

    //validar formulario
    const formOption = { resolver: yupResolver(validationSchema) };
    //envío de formulario
    const { register, handleSubmit, formState } = useForm(formOption);

    let { errors } = formState;

    const enviar_data = (data) => {
        let datos = {
            "email": data.email,
            "password": data.password,
            "external": params.external,
        }
        modify_person_email(datos, token).then((info) => {
            if (info && info.code == '200') {
                console.log("Datos registrados");
                console.log(info);
                swal({
                    title: "INFO",
                    text: "Cuenta Modificada",
                    icon: "success",
                    button: "Aceptar",
                    timer: 8000,
                    closeOnEsc: true
                });
                //redireccionar a la pagina de menu
                /*router.push('/person');
                */
                router.refresh();
            } else {
                swal({
                    title: "Error",
                    text: info.response.data.datos.error,
                    icon: "error",
                    button: "Aceptar",
                    timer: 8000,
                    closeOnEsc: true
                });
                console.log("No se pudo registrar");
                console.log(info);
            }
        })
    };


    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image vh-100' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardBody className='px-5'>
                    <h2 className="text-uppercase text-center mb-5">Modificar cuenta</h2>
                    <form onSubmit={handleSubmit(enviar_data)}>
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}   
                        <MDBInput wrapperClass='mb-4' label='Correo' size='lg' id='form1' type='text' 
                        {...register('email')} defaultValue = {person && person.email}/>
                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
                        <MDBInput wrapperClass='mb-4' label='Contraseña' size='lg' id='form2' type='text' 
                        {...register('password')}/>
                        <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Confimar</MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}
