import styled from 'styled-components/native';
import { verticalScale, windowHeight } from 'utils/scaleFunctions';

export const ButtonToTop = styled.TouchableOpacity`
    position: absolute; 
    align-self: center; 
    z-index: 99px; 
    top: ${verticalScale(8)}px; 
    width: ${verticalScale(60)}px; 
    height: ${verticalScale(20)}px; 
    border-radius: 20px;
    background-color: ${(props) => props.theme.borderColor};
    align-content: center;
    align-items: center;
    justify-content: center;
`;

export const ImageContainer = styled.View`
    width: 90%;
    height: 45%;
    align-self: center;
    margin-top: ${verticalScale(25)}px;
`;

export const ContentContainer = styled.View`
    width: 100%;
    height: ${windowHeight}px;
`;

export const TodayContainer = styled.View`
    width: 100%;
    height: ${windowHeight}px;
`;
