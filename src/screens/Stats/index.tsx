import { useTheme } from 'styled-components/native';
import { useSelector } from 'react-redux';
import { windowWidth } from 'utils/scaleFunctions';
import { StatsContainer } from './styled';
import type { RootState } from 'store/redux';
import { ContributionGraph } from 'react-native-chart-kit';

function transformData(data: any) {
	return data.map((item: any) => ({
		date: new Date(item.date).toISOString().split('T')[0],
		count: item.progress / 10,
	}));
}

export const Stats = () => {
	const theme = useTheme();
	const { themeName } = theme;
	const savedHabits = useSelector((state: RootState) => state.habits.savedHabits);
	const transformedData = transformData(savedHabits);

	const handleTooltip: any = (value: any) => {
		return { rx: value?.count > 0 ? 5 : 0, ry: value?.count > 0 ? 5 : 0 };
	};

	return (
		<StatsContainer>
			<ContributionGraph
				height={280}
				gutterSize={10}
				squareSize={20}
				width={windowWidth * 0.6}
				values={transformedData}
				endDate={new Date().setDate(new Date().getDate() - 1) as unknown as Date}
				numDays={windowWidth * 0.1}
				tooltipDataAttrs={handleTooltip}
				chartConfig={{
					backgroundColor: theme.bgColor,
					backgroundGradientTo: theme.bgColor,
					backgroundGradientFrom: theme.bgColor,
					decimalPlaces: 2,
					color: (opacity = 1) => (themeName.includes('light') ? `rgba(0, 0, 0, ${opacity})` : `rgba(255, 255, 255, ${opacity})`),
					labelColor: (opacity = 1) =>
						themeName.includes('light') ? `rgba(0, 0, 0, ${opacity})` : `rgba(255, 255, 255, ${opacity})`,
					propsForLabels: {
						fontSize: 20,
					},
					style: {},
				}}
				style={{
					paddingLeft: '12%',
					borderWidth: 2,
					borderRadius: 16,
					borderColor: theme.borderColor,
				}}
				onDayPress={(val) => console.log({ val })}
				showOutOfRangeDays={false}

			/>
		</StatsContainer>
	);
};
