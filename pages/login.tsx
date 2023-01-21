import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import LoginLayout from '@layouts/LoginLayout';

interface IFormik {
	email: string;
	password: string;
}

const LoginPage = (): JSX.Element => {
	const formik = useFormik<IFormik>({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().email('Введите корректный email').required('Это обязательное поле'),
			password: Yup.string().required('Это обязательное поле'),
		}),
		onSubmit: () => undefined,
	});

	return (
		<LoginLayout>
			<h1 className='text-heading-1 mt-28'>
				С возвращением! 👋
			</h1>
			<p className='text-BodyText_14 text-darkGrey mt-4'>
				Войди в аккаунт чтобы воспользоваться сервсиом
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
				<Input
					className='w-full'
					placeholder='Пароль'
					type='password'
					name='password'
					onChange={formik.handleChange}
					value={formik.values.password}
					errorMessage={formik.submitCount ? formik.errors.password : undefined} />
				<Button variant='filled' color='black'>
					Войти
				</Button>
			</form>
			<p className='text-BodyText_16 mt-6 text-center max-w-[420px]'>
				Нет аккаунта?
				{' '}
				<Link href='/signup' className='text-primary'>
					Зарегистрируйтесь!
				</Link>
			</p>
		</LoginLayout>
	);
};

export default LoginPage;
