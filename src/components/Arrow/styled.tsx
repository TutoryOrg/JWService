import { fontSizes, Direction } from 'utils/constants';
import styled from 'styled-components/native';

export const ImageStyled = styled.Image<{ direction: string }>`
    height: ${fontSizes.large}px;
    width: ${fontSizes.large}px;
    transform: rotate(${props => (props.direction === Direction.LEFT ? '180deg' : '0deg')});
`;
