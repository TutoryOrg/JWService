import { Arrow } from 'components/Arrow';
import { ContainerRow } from '../styled';
import { TouchableOpacity } from 'react-native';
import { CalendarMode, Direction } from 'utils/constants';
import { YearHeaderContainer, DateLabelText } from './styled';

interface IYear {
    year: number;
    setMode: (mode: CalendarMode) => void;
}
export const Year = (props: IYear) => {
    const { year, setMode } = props;

    return (
        <YearHeaderContainer>
            <TouchableOpacity
                onPress={() => setMode(CalendarMode.MONTH)}
                children={
                    <ContainerRow>
                        <Arrow direction={Direction.LEFT} />
                        <DateLabelText children={year} />
                    </ContainerRow>
                }
            />
        </YearHeaderContainer>
    );
};
