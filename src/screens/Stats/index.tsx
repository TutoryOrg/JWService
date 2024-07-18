import { StatsContainer, TopLabel } from './styled';
import { ContributionGraph } from 'react-native-chart-kit';
import { windowWidth } from 'utils/scaleFunctions';

const commitsData = [
	{ date: '2017-01-02', count: 1 },
	{ date: '2017-01-03', count: 2 },
	{ date: '2017-01-04', count: 3 },
	{ date: '2017-01-05', count: 4 },
	{ date: '2017-01-06', count: 5 },
	{ date: '2017-01-30', count: 2 },
	{ date: '2017-01-31', count: 3 },
	{ date: '2017-03-01', count: 2 },
	{ date: '2017-04-02', count: 4 },
	{ date: '2017-03-05', count: 2 },
	{ date: '2017-02-30', count: 4 },
];

export const Stats = () => {
	console.log('stats');
	return (
		<StatsContainer>
			<TopLabel>Stats</TopLabel>
			<ContributionGraph
				values={commitsData}
				endDate={new Date('2017-04-01')}
				numDays={105}
				height={220}
				width={windowWidth}
				tooltipDataAttrs={(value) => console.log(value) as any}
				chartConfig={{
					backgroundColor: '#e26a00',
					backgroundGradientFrom: '#fb8c00',
					backgroundGradientTo: '#ffa726',
					decimalPlaces: 2,
					color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					style: {
						borderRadius: 16,
					},
					propsForDots: {
						r: '6',
						strokeWidth: '2',
						stroke: '#ffa726',
					},
				}}
				style={{
					marginVertical: 8,
					borderRadius: 16,
				}}
			/>
		</StatsContainer>
	);
};
