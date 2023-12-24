import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AddHabitLabel, AddHabitContainer, HabitContainer } from './styled';

export const CreateHabitContainer = () => {
    return <></>;
};

enum EHabit {
    ADD = 'add',
    CREATE = 'create',
    EDIT = 'edit',
}
export const Habit = (props: {}) => {
    const { t } = useTranslation();
    const [habit, setHabit] = useState<string>('');
    const [mode, setMode] = useState<EHabit>(EHabit.ADD);

    return (
        <HabitContainer>
            {mode === EHabit.ADD && (
                <AddHabitContainer
                    onPress={() => setMode(EHabit.CREATE)}
                    children={<AddHabitLabel children={t('addHabit')} />}
                />
            )}
            {mode === EHabit.CREATE && <CreateHabitContainer />}
        </HabitContainer>
    );
};
