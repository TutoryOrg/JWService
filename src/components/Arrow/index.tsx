import { useTheme } from 'styled-components/native';
import { Direction } from 'utils/constants';
import { ImageStyled } from './styled';

export const Arrow = (props: { direction: Direction }) => {
	const { direction } = props;
	const { themeName } = useTheme();

	return (
		<ImageStyled
			style={{ alignSelf: 'center' }}
			direction={direction}
			source={
				themeName === 'darkTheme'
					? require('../../../assets/icons/white_arrow.png')
					: require('../../../assets/icons/black_arrow.png')
			}
		/>
	);
};
