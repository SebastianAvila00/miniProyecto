import React, { useState } from 'react';
import { Formik } from 'formik';
import Input from './Input';

const Formulario = ({errors}) => {



	return (
		<>


			<Formik
				initialValues={{
					name: '',
					password: ''

				}}
				validate={(valores) => {
					let errores = {};
					if (!valores.name) {
						errores.name = 'Porfavor ingrese un nombre'
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
						errores.name = 'El nombre solo puede contener letras y espacios'

					}
					return errores;

				}}
				onSubmit={(valores) => {
					console.log(valores);
					console.log("Enviar");
				}}
			>
				{({ handleSubmit, values, errors, handleChange, handleBlur }) => (
					<form
						action=""
						onSubmit={handleSubmit}
						className="h-[400px] md:w-[400px] bg-[#F2F2F2]"
					>

						<div className='pt-5'>

							<div className='flex flex-col justify-center md:justify-around items-center lg:flex-row lg:items-start'>

								<div>
									<label htmlFor="nombre" className='text-[#212121] md:text-[17px] lg:text-[18px]'>Nombre de <br className='hidden lg:block' /> usuario</label>
								</div>
								<div className='flex flex-col'>
									<input
										className='lg:mt-3 w-[250px] bg-[#313131] text-[#f1f1f1]  rounded-md md:h-[40px] md:w-[237px]'
										type="text"
										name="name"
										id="name"
										value={values.name}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									<a className='text-[#1b53ba] hover:text-[#77a6fe]' href="#" rel="noopener noreferrer">¿Has olvidado tu nombre de <br className='hidden md:block' /> usuario?</a>

								</div>
							</div>
							{errors.name && <div>{errors.name}</div>}



							<div className='flex flex-col justify-center md:justify-around items-center lg:items-start lg:flex-row'>

								<div>
									<label htmlFor="nombre" className='text-[#212121] md:text-[17px] lg:text-[18px]'>Contraseña</label>
								</div>
								<div className='flex flex-col'>
									<input
										className=' bg-[#313131] text-[#f1f1f1]  rounded-md md:h-[40px] w-[250px] md:w-[237px]'
										type="password"
										name="password"
										id="password"
										value={values.password}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									<a className='text-[#1b53ba] hover:text-[#77a6fe]' href="#" rel="noopener noreferrer">¿Has olvidado tu contraseña?</a>

								</div>
							</div>
						</div>

						<div className='flex justify-center lg:justify-end lg:pr-5'>
							<button className='h-[44px] mt-10  rounded-md text-white w-[140px] hover:bg-[#329e42] font-semibold  bg-[#4dad5b]' type="submit">Iniciar Sesión</button>
						</div>
					</form>

				)}
			</Formik>
		</>
	);
}

export default Formulario;





