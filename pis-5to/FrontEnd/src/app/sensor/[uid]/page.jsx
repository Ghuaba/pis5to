'use client';

import { modify_sensor, get } from '@/hooks/service_sensor';
import { all_element } from '@/hooks/service_sensor';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function EditSensor({ params }) {
    let token = Cookies.get('token');
    const router = useRouter();
    let [element, setElement] = useState(null);
    let [estado, setEstado] = useState(false);
    let [sensor, setSensor] = useState(null);

    useEffect(() => {
        if (!estado) {
            all_element(token).then((info) => {
                if (info.code === 200) {
                    setElement(info.datos);
                }
            });
            setEstado(true);
        }

        if (!sensor) {
            get(token, params.uid).then((infor) => {
                if (infor.code === 200) {
                    console.log(infor.datos)
                    setSensor(infor.datos);
                }
            });
        }
    }, [estado, sensor, token, params.uid]);

    const validationSchema = Yup.object().shape({
        name: Yup.string().trim().required('ESCRIBA EL NOMBRE'),
        ip: Yup.string().trim().required('ESCRIBA LA IP')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { control, register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const sendInfo = (data) => {
        data.uid = params.uid;
        modify_sensor(data, token).then((info) => {
            if (info.code === 200) {
                swal({
                    title: "CORRECTO",
                    text: info.datos.tag,
                    icon: "success",
                    button: "Accept",
                    timer: 4000,
                    closeOnEsc: true,
                });
                router.push('/sensor');
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
            }
        });
    };

    if (!sensor) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <main>
                <div className='text-center'>
                    <h2>Editar Sensor</h2>
                    <hr style={{
                        border: '10',
                        height: '1px',
                        backgroundColor: 'green',
                        margin: '8px 0'
                    }} />
                </div>
                <div className='text-center'>
                    <h5>Datos del Sensor</h5>
                </div>
                <div className='text-center'>
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
                                            defaultValue={sensor.name}
                                            isInvalid={!!errors.name}
                                        />
                                    )}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>IP</Form.Label>
                                <Controller
                                    name="ip"
                                    control={control}
                                    render={({ field }) => (
                                        <Form.Control
                                            type="text"
                                            {...register('ip')}
                                            defaultValue={sensor.ip}
                                            isInvalid={!!errors.ip}
                                        />
                                    )}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.ip?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom03">
                                <Form.Label>Tipo Elemento</Form.Label>
                                <select className="form-control" name="element_type" {...register('element_type')} defaultValue={sensor.element_type}>
                                    <option value="">Seleccione un tipo de elemento</option>
                                    {element && element.map((dato, i) => (
                                        <option key={i} value={dato.key}>{dato.value}</option>
                                    ))}
                                </select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.element_type?.message}
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