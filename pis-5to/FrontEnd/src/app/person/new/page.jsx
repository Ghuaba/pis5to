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
    import { save_person } from '../../../hooks/service_person';
    import Cookies from 'js-cookie';

    export default function newPerson() {
        const token = Cookies.get('token');

        const router = useRouter();

        //validación de campos 
        const validationSchema = yup.object().shape({
            name: yup.string().required('Campo obligatorio'),
            dni: yup.string().required('Campo obligatorio'),
            last_name: yup.string().required('Campo obligatorio'),
            email: yup.string().required('Campo obligatorio'),
            password: yup.string().required('Campo obligatorio')
        });

        //validar formulario
        const formOption = { resolver: yupResolver(validationSchema) };
        //envío de formulario
        const { register, handleSubmit, formState } = useForm(formOption);

        let { errors } = formState;

        const enviar_data = (data) => {
            save_person(data, token).then((info) => {
                if (info.code == '200') {
                    console.log("Datos registrados");
                    console.log(info);
                    swal({
                        title: "INFO",
                        text: "Cuenta registrada.",
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
                        <h2 className="text-uppercase text-center mb-5">Formulario de registro</h2>
                        <form onSubmit={handleSubmit(enviar_data)}>
                            {errors.name && <p className="text-danger">{errors.name.message}</p>}   
                            <MDBInput wrapperClass='mb-4' label='Nombres' size='lg' id='form1' type='text' {...register('name')} />
                            {errors.last_name && <p className="text-danger">{errors.last_name.message}</p>}
                            <MDBInput wrapperClass='mb-4' label='Apellidos' size='lg' id='form2' type='text' {...register('last_name')} />
                            {errors.dni && <p className="text-danger">{errors.dni.message}</p>}
                            <MDBInput wrapperClass='mb-4' label='DNI' size='lg' id='form3' type='text' {...register('dni')} />
                            {errors.email && <p className="text-danger">{errors.email.message}</p>}
                            <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='text' {...register('email')} />
                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                            <MDBInput wrapperClass='mb-4' label='Contraseña' size='lg' id='form5' type='password' {...register('password')} />
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    }
