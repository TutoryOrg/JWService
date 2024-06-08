import { months } from 'utils/constants';
import { MonthContainer, MonthLabel } from './styled';
import { useTranslation } from 'react-i18next';
import { View, Text, FlatList } from 'react-native';
import { isMobile, windowWidth } from 'utils/scaleFunctions';
import _ from 'lodash';

interface IYearContent {
    date: Date;
}
export const YearContent = (props: IYearContent) => {
    const { date } = props;
    const { t } = useTranslation();
    const currentMonth = months[date.getMonth()];

    const renderItem = (props: any) => {
        const { item } = props;
        return (
            <MonthContainer selected={_.isEqual(item, currentMonth)}>
                <MonthLabel selected={_.isEqual(item, currentMonth)} children={t(`${item}_`)} />
            </MonthContainer>
        );
    };

    return (
        <FlatList
            numColumns={3}
            data={months}
            renderItem={renderItem}
            columnWrapperStyle={{
                margin: 35,
                width: isMobile ? windowWidth - windowWidth * 0.3 : windowWidth - windowWidth * 0.4,
                justifyContent: 'space-between',
            }}
        />
    );
};
