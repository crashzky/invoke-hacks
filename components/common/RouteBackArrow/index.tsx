import Props from './RouteBackArrow.props';
import ArrowLeft from '@assets/ic_arrowleft.svg';

const RouteBackArrow: React.FC<Props> = ({ onRouteBack, routeBackTitle, ...props }) => {
	return (
		<button className='flex gap-3 items-center' onClick={onRouteBack} {...props}>
			<div className='p-1 bg-primary rounded-lg inline-block'>
				<ArrowLeft className='stroke-white' />
			</div>

			<p className='text-primary text-lg font-semibold'>
				{routeBackTitle}
			</p>
		</button>
	);
};

export default RouteBackArrow;
