import { fontSizes, Direction } from 'utils/constants';
import styled from 'styled-components/native';

export const ImageStyled = styled.Image<{ direction: string }>`
    height: ${fontSizes.large}px;
    width: ${fontSizes.large}px;
    transform: rotate(
        ${props =>
            props.direction === Direction.LEFT
                ? '180deg'
                : props.direction === Direction.RIGHT
                ? '0deg'
                : props.direction === Direction.DOWN
                ? '90deg'
                : '270deg'}
    );
`;
