import styled from 'styled-components/native';
import { verticalScale, windowWidth } from 'utils/scaleFunctions';

export const GridItem = styled.View`
    align-items: center;
    justify-content: center;
    height: ${windowWidth < 700 ? verticalScale(40) : verticalScale(70)}px;
    width: ${windowWidth < 700 ? verticalScale(40) : verticalScale(70)}px;
    margin-top: ${windowWidth < 700 ? verticalScale(5) : verticalScale(10)}px;
    margin-bottom: ${windowWidth < 700 ? verticalScale(5) : verticalScale(10)}px;
    margin-left: ${windowWidth < 700 ? verticalScale(5) : verticalScale(46)}px;
    margin-right: ${windowWidth < 700 ? verticalScale(5) : verticalScale(46)}px;
`;

export const MonthContentContainer = styled.View`
    width: 100%;
    height: 80%;
    align-items: center;
`;
