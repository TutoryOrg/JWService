import { months } from 'utils/constants';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import type { RootState } from 'store/redux';
import { isMobile, windowWidth } from 'utils/scaleFunctions';
import { MonthContainer, MonthLabel } from './styled';
import _ from 'lodash';

interface IYearContent {
	date: Date;
}
export const YearContent = (props: IYearContent) => {
	// const { date } = props;
    // const currentMonth = months[date.getMonth()];
	const { t } = useTranslation();
	const savedHabits = useSelector((state: RootState) => state.habits.savedHabits);

	const renderItem = (props: any) => {
		const { item } = props;
		const habitsMonth = savedHabits.filter((h) => h.date.toLowerCase().includes(item));
		const progress = (habitsMonth.length / 30) * 100;

		return (
			<MonthContainer progress={progress}>
				<MonthLabel progress={progress} children={t(`${item}_`)} />
			</MonthContainer>
		);
	};

	return (
		<FlatList
			numColumns={3}
			data={months}
			renderItem={renderItem}
			columnWrapperStyle={{
				margin: 25,
				justifyContent: 'space-between',
				width: isMobile ? windowWidth - windowWidth * 0.3 : windowWidth - windowWidth * 0.4,
			}}
		/>
	);
};
