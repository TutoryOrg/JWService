import { useTranslation } from 'react-i18next';
import { AddHabitContainer, AddHabitLabel } from './styled';

export const AddHabit = (props: {}) => {
    const { t } = useTranslation();

    return (
        <AddHabitContainer
            onPress={() => null}
            children={<AddHabitLabel children={t('addHabit')} />}
        />
    );
};
