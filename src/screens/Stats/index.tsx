import { useTheme } from 'styled-components/native';
import { windowWidth } from 'utils/scaleFunctions';
import { ContributionGraph } from 'react-native-chart-kit';
import { StatsContainer, TopLabel } from './styled';
import { A } from '@expo/html-elements';

const commitsData = [
    { date: '2024-01-02', count: 1 },
    { date: '2024-01-03', count: 2 },
    { date: '2024-01-04', count: 3 },
    { date: '2024-01-05', count: 4 },
    { date: '2024-01-06', count: 5 },
    { date: '2024-01-30', count: 2 },
    { date: '2024-01-31', count: 3 },
    { date: '2024-03-01', count: 2 },
    { date: '2024-04-02', count: 4 },
    { date: '2024-03-05', count: 2 },
    { date: '2024-07-19', count: 10 },
];

export const Stats = () => {
    // const theme = useTheme();
    // const { themeName } = theme;

    return (
        <StatsContainer>
            <A href='https://localhost/sta/reg/auth/es/626900003906192240004'>
                {/*<TopLabel>Last {Math.round(windowWidth * 0.2)} days </TopLabel>*/}
                <TopLabel>Go to REGX0320</TopLabel>
            </A>
            <A href='https://localhost/sta/reg/auth/es/6269000038732779900004'>
                {/*<TopLabel>Last {Math.round(windowWidth * 0.2)} days </TopLabel>*/}
                <TopLabel>Go to REGX0320</TopLabel>
            </A>
            {/*<ContributionGraph
                height={210}
                width={windowWidth * 0.8}
                values={commitsData}
                endDate={new Date()}
                numDays={Math.round(windowWidth * 0.2)}
                tooltipDataAttrs={(value) => console.log('tooltipDataAttrs', value) as any}
                chartConfig={{
                    backgroundColor: theme.bgColor,
                    backgroundGradientFrom: theme.bgColor,
                    backgroundGradientTo: theme.bgColor,
                    decimalPlaces: 2,
                    color: (opacity = 1) => (themeName.includes('light') ? `rgba(0, 0, 0, ${opacity})` : `rgba(255, 255, 255, ${opacity})`),
                    labelColor: (opacity = 1) =>
                        themeName.includes('light') ? `rgba(0, 0, 0, ${opacity})` : `rgba(255, 255, 255, ${opacity})`,
                    style: {},
                    propsForDots: {
                        r: '6',
                        strokeWidth: '8',
                    },
                }}
                style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    borderWidth: 2,
                    borderRadius: 16,
                    borderColor: 'white',
                }}
            />*/}
        </StatsContainer>
    );
};
