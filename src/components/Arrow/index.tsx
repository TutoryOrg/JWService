import { useTheme } from 'styled-components/native';
import { fontSizes, Direction } from 'utils/constants';
import styled from 'styled-components/native';

export const Arrow = (props: { direction: Direction }) => {
    const { direction } = props;
    const { themeName } = useTheme();

    const ImageStyled = styled.Image`
        height: ${fontSizes.large}px;
        width: ${fontSizes.large}px;
        transform: rotate(${direction === Direction.LEFT ? '180deg' : '0deg'});
    `;

    return (
        <ImageStyled
            source={
                themeName === 'darkTheme'
                    ? require('../../../assets/icons/white_arrow.png')
                    : require('../../../assets/icons/black_arrow.png')
            }
        />
    );
};
