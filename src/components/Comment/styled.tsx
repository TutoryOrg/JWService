import styled from 'styled-components/native';
import { fontSizes } from 'utils/constants';
import { verticalScale } from 'utils/scaleFunctions';

export const CommentContainer = styled.TextInput`
    width: 100%;
    height: 50%;
    border-radius: 10px;
    font-size: ${verticalScale(fontSizes.small)}px;
    color: ${props => props.theme.txtColor};
    background-color: ${props => props.theme.gray};
`;
