import Button from '@components/Button';
import Input from '@components/Input';
import LoginLayout from '@layouts/LoginLayout';
import Link from 'next/link';

const LoginPage = (): JSX.Element => {
	return (
		<LoginLayout>
			<h1 className='text-heading-1 mt-28'>
				С возвращением! 👋
			</h1>
			<p className='text-BodyText_14 text-darkGrey mt-4'>
				Войди в аккаунт чтобы воспользоваться сервсиом
			</p>
			<div className='max-w-[420px] mt-6 grid gap-[14px]'>
				<Input className='w-full' placeholder='Email' type='email' />
				<Input className='w-full' placeholder='Пароль' type='password' />
				<Button variant='filled' className='bg-black'>
					Войти
				</Button>
			</div>
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
