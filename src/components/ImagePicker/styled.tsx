import styled from 'styled-components/native';

export const ImageViewer = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ImageContainer = styled.TouchableOpacity`
    width: 80%;
    height: 35%;
    max-width: 800px;
    margin-top: 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.gray};
`;
