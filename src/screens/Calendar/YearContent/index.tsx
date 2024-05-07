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
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                    }}>
                    <Text style={{ color: 'white', fontSize: 50 }}>{m}</Text>
                </View>
            ))}
        </YearContentContainer>
    );
};
