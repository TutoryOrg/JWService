import styled from "styled-components/native";
import { verticalScale } from "utils/scaleFunctions";
import { fontFamilies, fontSizes } from "utils/constants";

export const YearText = styled.Text`
    color: ${props => props.theme.txtColor};
    font-size: ${verticalScale(fontSizes.large)}px;
    font-family: ${fontFamilies.CascadiaMono};
`;

export const MonthText = styled(YearText)``


export const YearContainer = styled.TouchableOpacity`
    height: ${verticalScale(40)}px;
    width: ${verticalScale(100)}px;
    align-items: center;
    flex-direction: row;
    margin-top: ${verticalScale(30)}px;
`

export const MonthContent = styled.View`
    width: 100%;
    height: 80%;
`

export const MonthHeader = styled.View`
    width: 90%;
    height: 10%;
    flex-direction: row;
    align-items: flex-end;
    border-bottom-width: 2px;
    justify-content: space-between;
    border-color: ${props => props.theme.borderColor};
`

export const MonthContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`
