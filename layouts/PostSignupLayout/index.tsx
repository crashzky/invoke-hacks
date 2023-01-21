import Logo from '@/components/common/Logo';
import RouteBackArrow from '@/components/common/RouteBackArrow';
import Steps from '@components/common/Steps';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Props from './PostSignupLayot.props';

const PostSignupLayout: React.FC<Props> = ({ children, activeStep }) => {
	const router = useRouter();

	return (
		<>
			<header className='px-28 py-12 flex justify-between items-center'>
				<Logo />
				<Steps
					onChangeStep={(stepId) => router.push(`/postsignup/step${stepId+1}`)}
					steps={['Основные данные', 'Специализация', 'Интересы']}
					activeStep={activeStep} />
				{activeStep !== 2 ? (
					<button 
						className='font-semibold text-sm text-primary'
						onClick={() => router.push(`/postsignup/step${activeStep+2}`)}>
						Пропустить
					</button>
				) : <div className='w-[85px]'></div>}
			</header>
			<div className='px-28'>
				{activeStep !== 0 && <RouteBackArrow routeBackTitle='Назад' onRouteBack={() => router.push(`/postsignup/step${activeStep}`)} />}
				<p className='font-semibold text-primary mt-6'>
					Шаг 
					{' '}
					{activeStep+1}
					/3
				</p>
			</div>
			{children}
		</>
	);
};

export default PostSignupLayout;
