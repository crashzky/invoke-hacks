import Link from 'next/link';
import { useRouter } from 'next/router';
import Props from './HorizontalMenu.props';

const HorizontalMenu: React.FC<Props> = ({ className = '', items, ...props }) => {
	const router = useRouter();

	let selectedMenuItem = 0;

	items.forEach((i, num) => {
		if(router.pathname.startsWith(i.link))
			selectedMenuItem = num;
	});

	return (
		<div className={className + ' flex gap-3 items-center'} {...props}>
			{items.map((i, num) => (
				<Link key={num} href={i.link} className={'text-heading-2 ' + (selectedMenuItem !== num && 'text-grey')}>
					{i.label}
				</Link>
			))}
		</div>
	);
};

export default HorizontalMenu;
