import Link from 'next/link';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import RadioInput from '@components/common/RadioInput';
import LoginLayout from '@layouts/LoginLayout';
import { useRouter } from 'next/router';

interface IFormik {
	email: string;
	userType: 'student' | 'company' | undefined;
	password: string;
	password2: string;
}

const SignupPage = (): JSX.Element => {
	const router = useRouter();

	const [password, setPassword] = useState('');

	const formik = useFormik<IFormik>({
		initialValues: {
			email: '',
			userType: undefined,
			password: '',
			password2: '',
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().email('Введите корректный email').required('Это обязательное поле'),
			userType: Yup.string().oneOf(['student', 'company']).required('Это обязательное поле'),
			password: Yup.string().required('Это обязательное поле'),
			password2: Yup.string().equals([password], 'Пароли должны совпадать').required('Это обязательное поле'),
		}),
		onSubmit: () => router.push('/postsignup/step1'),
	});

	return (
		<LoginLayout>
			<h1 className='text-heading-1 mt-28'>
				Хей, привет! 👋
			</h1>
			<p className='text-BodyText_14 text-darkGrey mt-4'>
				Зарегистрируйтесь и заполните данные о себе,
				<br />
				чтобы в полной мере воспользоваться сервисом
			</p>
			<form onSubmit={formik.handleSubmit} className='max-w-[420px] mt-6 grid gap-[14px]'>
				<Input
					className='w-full'
					placeholder='Email'
					type='email'
					name='email'
					onChange={formik.handleChange}
					value={formik.values.email}
					errorMessage={formik.submitCount ? formik.errors.email : undefined} />
				<RadioInput
					items={[
						{
							label: 'Ученик',
							id: 'student',	
						},
						{
							label: 'Компания',
							id: 'company',	
						},
					]}
					name='userType'
					errorMessage={formik.submitCount ? formik.errors.userType : undefined}
					onChange={formik.handleChange} />
				<Input
					className='w-full'
					placeholder='Придумайте пароль'
					type='password'
					name='password'
					onChange={(e) => {
						formik.handleChange(e);
						setPassword(e.target.value);
					}}
					value={formik.values.password}
					errorMessage={formik.submitCount ? formik.errors.password : undefined} />
				<Input
					className='w-full'
					placeholder='Повторите пароль'
					type='password'
					name='password2'
					onChange={formik.handleChange}
					value={formik.values.password2}
					errorMessage={formik.submitCount ? formik.errors.password2 : undefined} />
				<Button variant='filled' color='black'>
					Создать аккаунт
				</Button>
			</form>
			<p className='text-BodyText_16 mt-6 text-center max-w-[420px]'>
				Есть аккаунт?
				{' '}
				<Link href='/login' className='text-primary'>
					Войдите!
				</Link>
			</p>
		</LoginLayout>
	);
};

export default SignupPage;
