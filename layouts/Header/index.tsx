import HeaderProfile from '@components/common/HeaderProfile';
import HEADER_ITEMS from '@shared/consts/headerItems';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Props from './Header.props';

const Header: React.FC<Props> = ({ className = '', ...props }) => {
	const router = useRouter();

	return (
		<header className={className + ' mx-28 py-7 flex items-center justify-between border-b-[1px] border-lightGrey'} {...props}>
			<Link className='font-bold text-2xl' href='/'>
				Invoke
				<span className='text-primary'>
					.teams
				</span>
			</Link>
			<nav className='flex items-center gap-10'>
				{HEADER_ITEMS.map((I, num) => (
					<button key={num} className='grid grid-cols-[24px_1fr] gap-3 items-center' onClick={() => router.push(I.url)}>
						{router.pathname.startsWith(I.url) ? (
							<I.activeIcon />
						) : (
							<I.defaultIcon />
						)}
						<p className={'text-BodyText_14 '
							+ (router.pathname.startsWith(I.url) ? 'text-primary' : 'text-darkGrey')}>
							{I.label}
						</p>
					</button>
				))}
			</nav>
			<HeaderProfile />
		</header>
	);
};

export default Header;
