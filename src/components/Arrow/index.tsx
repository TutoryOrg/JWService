import { useTheme } from 'styled-components/native';
import { ImageStyled } from './styled';
import type { Direction } from 'utils/constants';

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
