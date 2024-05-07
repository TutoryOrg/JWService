import { Text, View } from 'react-native';
import { months } from 'utils/constants';
import { YearContentContainer } from './styled';

interface IYearContent {
    date: Date;
}
export const YearContent = (props: IYearContent) => {
    const { date } = props;
    const month = months[date.getMonth()];
    return (
        <YearContentContainer>
            {months.map(m => (
                <View
                    style={{
                        height: 80,
                        width: 80,
                        backgroundColor: 'yellow',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text>{m}</Text>
                </View>
            ))}
        </YearContentContainer>
    );
};
