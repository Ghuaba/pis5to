'use client';

import Link from 'next/link';
import { Metadata } from 'next';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';
import { save_person } from '@/hooks/service_person';


const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obligatorio'),
  dni: yup.string().required('Campo obligatorio'),
  last_name: yup.string().required('Campo obligatorio'),
  email: yup.string().required('Campo obligatorio'),
  password: yup.string().required('Campo obligatorio')
});

const SignupPage = () => {
  const router = useRouter();
  const formOption = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOption);
  const { errors } = formState;

  const enviar_data = (data) => {
    save_person(data).then((info) => {
      if (info.code == '200') {
        swal({
          title: 'INFO',
          text: 'Cuenta registrada.',
          icon: 'success',
          button: 'Aceptar',
          timer: 8000,
          closeOnEsc: true
        });
        router.refresh();
      } else {
        swal({
          title: 'Error',
          text: info.datos.error,
          icon: 'error',
          button: 'Aceptar',
          timer: 8000,
          closeOnEsc: true
        });
      }
    });
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Create your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  It’s totally free and super easy
                </p>
                <button className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                  <span className="mr-3">
                    {/* Google SVG */}
                  </span>
                  Sign in with Google
                </button>
                <button className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                  <span className="mr-3">
                    {/* Github SVG */}
                  </span>
                  Sign in with Github
                </button>
                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                  <p className="w-full px-5 text-center text-base font-medium text-body-color">
                    Or, register with your email
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                </div>
                <form onSubmit={handleSubmit(enviar_data)}>
                  <div className="mb-8">
                    <label htmlFor="name" className="mb-3 block text-sm text-dark dark:text-white">
                      Nombres
                    </label>
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Nombres"
                      size="lg"
                      id="form1"
                      type="text"
                      {...register('name')}
                    />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="last_name" className="mb-3 block text-sm text-dark dark:text-white">
                      Apellidos
                    </label>
                    {errors.last_name && <p className="text-danger">{errors.last_name.message}</p>}
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Apellidos"
                      size="lg"
                      id="form2"
                      type="text"
                      {...register('last_name')}
                    />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="dni" className="mb-3 block text-sm text-dark dark:text-white">
                      DNI
                    </label>
                    {errors.dni && <p className="text-danger">{errors.dni.message}</p>}
                    <MDBInput
                      wrapperClass="mb-4"
                      label="DNI"
                      size="lg"
                      id="form3"
                      type="text"
                      {...register('dni')}
                    />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="email" className="mb-3 block text-sm text-dark dark:text-white">
                      Email
                    </label>
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      size="lg"
                      id="form4"
                      type="text"
                      {...register('email')}
                    />
                  </div>
                  <div className="mb-8">
                    <label htmlFor="password" className="mb-3 block text-sm text-dark dark:text-white">
                      Contraseña
                    </label>
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Contraseña"
                      size="lg"
                      id="form5"
                      type="password"
                      {...register('password')}
                    />
                  </div>
                  <div className="mb-6">
                    <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Register
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Already using Startup?{' '}
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          {/* SVG Decoration */}
        </div>
      </section>
    </>
  );
};

export default SignupPage;
