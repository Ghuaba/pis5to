'use client';

import { save_sensor, all_element } from '@/hooks/service_sensor';

import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function NewSensor() {
    //const router= useRouter()
    let token = Cookies.get('token');
    let user = Cookies.get('token');
    let necesary = Cookies.get('necesary');

    const router = useRouter();
    let [element, setelement] = useState(null);
    let [estado, setEstado] = useState(false);
    useEffect(() => {
        if (!estado) {
            all_element(token).then((info) => {
                if (info.code == 200) {
                    setelement(info.datos);
                }
            });
            setEstado(true);
        }
    }, [estado, token]);

    const validationSchema = Yup.object().shape({
        ip: Yup.string().trim().required('ESCRIBA LA IP'),
        name: Yup.string().trim().required('ESCRIBA EL NOMBRE')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { control, register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
    //const router = useRouter();


    const sendInfo = (data) => {

        //data.fecha_nac = new Date(data.fecha_nac).toISOString().split('T')[0];

        //console.log(data.fecha_nac)
        data.person= necesary
        save_sensor(data, token).then((info) => {

            if (info.code == 200) {
                console.log(info);
                //Cookies.set('token',info.datos.token)
                //Cookies.set('usuario',info.datos.user);
                swal({
                    title: "CORRECTO",
                    text: info.datos.tag,
                    icon: "success",
                    button: "Accept",
                    timer: 4000,
                    closeOnEsc: true,
                });
                router.push('/product');
                router.refresh();
            } else {
                swal({
                    title: "ERROR",
                    text: info.datos.error,
                    icon: "error",
                    button: "Accept",
                    timer: 4000,
                    closeOnEsc: true,
                });
                console.log(info);
                console.log("NO");
            }
        });
    };

    return (
        <div>
            <main>
            <div className='text-center'>
                
                <h2>Agregar un nuevo Sensor</h2>
                <hr style={{
                    border: '10',
                    height: '1px',
                    backgroundColor: 'green', 
                    margin: '8px 0'
                }} />
            </div>
            <div className='text-center'>
            <h5>Datos del Sensor</h5>

            </div >
            <div className='text-center' >
                <Form onSubmit={handleSubmit(sendInfo)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Nombre</Form.Label>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        type="text"
                                        {...register('name')}

                                        isInvalid={!!errors.name}
                                    />
                                )}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label>Tipo Elemento</Form.Label>
                            <select className="form-control" name="element_type" {...register('element_type')}>
                                <option value="">Seleccione un tipo  de elemento</option>
                                {element && element.map((dato, i) => (
                                    <option key={i} value={dato.key}>{dato.value}</option>
                                ))}
                            </select>
                            <Form.Control.Feedback type="invalid">
                                {errors.element_type?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                       
                        
                    </Row>
                    <Row className="mt-6">
                        <Form.Group as={Col} md="6" controlId="validationCustom06">
                            <Form.Label>IP</Form.Label>
                            <Controller
                                name="ip"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        type="text"
                                        {...register('ip')}

                                        isInvalid={!!errors.ip}
                                    />
                                )}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.ip?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div className="text-center">
                        <Button type="submit" className='btn btn-primary'>Registrar</Button>
                    </div>
                </Form>
                </div>
            </main>
        </div>
    );
}