import Steps from '@components/common/Steps';
import Props from './PostSignupLayot.props';

const PostSignupLayout: React.FC<Props> = ({ children, activeStep, onSkip }) => {
	return (
		<>
			<header className='px-28 py-12 flex justify-between items-center'>
				<p className='font-bold text-2xl'>
					Invoke
					<span className='text-primary'>
						.teams
					</span>
				</p>
				<Steps
					steps={['Основные данные', 'Специализация', 'Интересы']}
					activeStep={activeStep} />
				<button className='font-semibold text-sm text-primary' onChange={onSkip}>
					Пропустить
				</button>
			</header>
			{children}
		</>
	);
};

export default PostSignupLayout;
