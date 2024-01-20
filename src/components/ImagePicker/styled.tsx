import styled from 'styled-components/native';
import { fontSizes } from 'utils/constants';
import { verticalScale } from 'utils/scaleFunctions';
import { CommentContainer } from 'components/Comment/styled';

export const ImageViewer = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ImageContainer = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: ${props => props.theme.gray};
`;

export const ImagePickerContainer = styled.View`
    width: 100%;
    height: 45%;
    max-width: 1000px;
    align-self: center;
    margin-top: ${verticalScale(20)}px;
`;

export const CommentDesc = styled.TextInput`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 20%;
    opacity: 0.5;
    border-radius: 10px;
    font-size: ${verticalScale(fontSizes.small)}px;
    color: ${props => props.theme.txtColor};
    background-color: ${props => props.theme.gray};
    padding-left: 20px;
`;
