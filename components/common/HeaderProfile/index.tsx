import Props from './HeaderProfile.props';

import IcLogout from '@assets/ic_logout.svg';

const HeaderProfile: React.FC<Props> = ({ className = '', ...props }) => {
	return (
		<div className={className + ' grid grid-cols-[1px_1fr] gap-7 h-12'} {...props}>
			<div className='h-full border-r-[1px] border-grey'></div>
			<div className='grid grid-cols-[48px_1fr] grid-rows-2 gap-x-3 gap-y-1'>
				<div
					className='w-12 h-12 bg-slate-400 rounded-full'
					style={{
						gridRow: '1 / 3',
					}}
				></div>
				<p className='text-BoldBodyText_14'>
					Александр Исаков
					<button className='text-red ml-4'>
						Выход
						<IcLogout className='inline-block ml-1' />
					</button>
				</p>
				<p className='text-BodyText_14 text-darkGrey'>
					alexis.design@procollab.ru
				</p>
			</div>
		</div>
	);
};

export default HeaderProfile;
