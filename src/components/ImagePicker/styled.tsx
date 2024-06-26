import styled from 'styled-components/native';
import { fontSizes } from 'utils/constants';
import { isMobile, verticalScale } from 'utils/scaleFunctions';

export const OptionsContainer = styled.View`
    width: ${verticalScale(200)}px;
    height: ${verticalScale(100)}px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    border-radius: 10px;
    background-color: ${props => props.theme.borderColor};
`

export const ImageViewer = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: ${props => props.theme.bgColorDimmed};
`;

export const ImageContainer = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: ${props => props.theme.gray};
`;

export const ImagePickerContainer = styled.View`
    width: 100%;
    height: 100%;
    max-width: 1000px;
    align-self: center;
`;

export const CommentDesc = styled.TextInput`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: ${isMobile ? '15%' : '20%'};
    opacity: 0.5;
    border-radius: 10px;
    font-size: ${verticalScale(fontSizes.small)}px;
    color: ${props => props.theme.txtColor};
    background-color: ${props => props.theme.gray};
    padding-left: 20px;
`;
