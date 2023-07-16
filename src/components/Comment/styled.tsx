import styled from 'styled-components/native';
import { fontSizes } from 'utils/constants';
import { verticalScale, isMobile } from 'utils/scaleFunctions';

export const CommentContainer = styled.TextInput`
    width: 80%;
    height: 8%;
    padding: ${isMobile ? '10' : '30'}px;
    margin-top: 40px;
    border-radius: 10px;
    font-size: ${verticalScale(fontSizes.small)}px;
    color: ${props => props.theme.txtColor};
    background-color: ${props => props.theme.gray};
`;
