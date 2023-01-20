import Props from './Button.props';
import getButtonStyles from './Button.styles';

const Button: React.FC<Props> = ({ className = '', variant, children, ...props }) => {
	return (
		<button className={getButtonStyles(variant) + className} {...props}>
			{children}
		</button>
	);
};

export default Button;
