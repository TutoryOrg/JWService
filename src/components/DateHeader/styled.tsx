import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props => props.theme.bgColor};
`;

// const Container = styled.TouchableOpacity<{
//     primary?: boolean;
//     height?: number;
//     width?: number;
//     backgroundColor?: string;
// }>`
//     background-color: ${props =>
//         props.primary
//             ? props.theme.primaryBnColor
//             : props.backgroundColor ?? props.theme.secondaryBnColor};
//     height: ${props => props?.height ?? verticalScale(gridSizes.grid9x)}px;
//     width: ${props => props?.width ?? 60}%;
//     border-radius: ${verticalScale(15)}px;
//     align-items: center;
//     justify-content: center;
// `;
