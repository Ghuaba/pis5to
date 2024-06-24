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
import { modify_person_personal, search_person } from '../../../../hooks/service_person';
//para llenar datos dentro de los let [estado, setEstado]
import { useState } from 'react';
import Cookies from 'js-cookie';

export default function modifyPersonalPerson({params}) {
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
        name: yup.string().required('Campo obligatorio'),
        last_name: yup.string().required('Campo obligatorio')
    });
    

    //validar formulario
    const formOption = { resolver: yupResolver(validationSchema) };
    //envío de formulario
    const { register, handleSubmit, formState } = useForm(formOption);

    let { errors } = formState;

    const enviar_data = (data) => {
        let datos = {
            "name": data.name,
            "last_name": data.last_name,
            "external": params.external,
        }
        modify_person_personal(datos, token).then((info) => {
            if (info && info.code == '200') {
                console.log("Datos registrados");
                console.log(info);
                swal({
                    title: "INFO",
                    text: "Datos personales modificados.",
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
                    <h2 className="text-uppercase text-center mb-5">Modificar datos personales</h2>
                    <form onSubmit={handleSubmit(enviar_data)}>
                        {errors.name && <p className="text-danger">{errors.name.message}</p>}   
                        <MDBInput wrapperClass='mb-4' label='Nombres' size='lg' id='form1' type='text' 
                        {...register('name')} defaultValue = {person && person.name}/>
                        {errors.last_name && <p className="text-danger">{errors.last_name.message}</p>}
                        <MDBInput wrapperClass='mb-4' label='Apellidos' size='lg' id='form2' type='text' 
                        {...register('last_name')} defaultValue = {person && person.last_name}/>
                        {errors.dni && <p className="text-danger">{errors.dni.message}</p>}
                        <MDBInput wrapperClass='mb-4' label='DNI' size='lg' id='form3' type='text' 
                        {...register('dni')} defaultValue = {person && person.dni} readOnly/>
                        
                        <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Confimar</MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}
