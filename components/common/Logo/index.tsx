import Link from 'next/link';
import Props from './Logo.props';

const Logo: React.FC<Props> = () => {
	return (
		<Link className='font-bold text-2xl' href='/'>
			Invoke
			<span className='text-primary'>
				.teams
			</span>
		</Link>
	)
}

export default Logo;
