import Props from './LoginLayout.props';

import RecIcon from '@assets/rec.svg';
import Link from 'next/link';

const LoginLayout: React.FC<Props> = ({ children, className = '', ...props }) => {
	return (
		<section className={className + ' grid grid-cols-2'} {...props}>
			<div className='pl-28 pt-16'>
				<Link className='font-bold text-2xl' href='/'>
					Invoke
					<span className='text-primary'>
						.teams
					</span>
				</Link>
				<div>
					{children}
				</div>
			</div>
			<div className={`h-screen flex items-center justify-center
				bg-[linear-gradient(173.89deg,rgba(79,158,253,0.8)_34.8%,rgba(22,53,214,0.8)_90.32%)]`}>
				<div className='w-[530px] h-[530px] pt-28 px-12 bg-white bg-opacity-20 backdrop-blur-[50px]'>
					<p className='font-bold text-[46px] text-white mb-6'>
						<RecIcon className='inline mr-3 mb-2' />
						Digital платформа для поиска команды и хакатонов в IT
					</p>
					<p className='text-BodyText_14 text-white'>
						Платформа поможет найти сокомандников и хакатоны чтобы ускорить развитие в айти
					</p>
				</div>
			</div>
		</section>
	);
};

export default LoginLayout;
