import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    AddHabitLabel,
    NewHabitInput,
    HabitContainer,
    AddHabitContainer,
    CreateHabitContainer,
    HabitButtonsContainer,
    CancelButton,
    CreateButton,
    TextButton,
    CreateText,
} from './styled';
import _ from 'lodash';

export const CreateHabit = (props: { onCancel: Function }) => {
    const { onCancel } = props;
    const [value, setValue] = useState<string>('');
    return (
        <CreateHabitContainer>
            <NewHabitInput
                value={value}
                autoFocus={true}
                placeholder={'new habit'}
                placeholderTextColor={'gray'}
                onChangeText={txt => setValue(txt)}
            />
            <HabitButtonsContainer>
                <CancelButton
                    onPress={() => onCancel()}
                    children={<TextButton children={'x'} />}
                />
                <CreateButton
                    value={value}
                    disabled={_.isEmpty(value)}
                    children={<CreateText value={value} children={'✔'} />}
                />
            </HabitButtonsContainer>
        </CreateHabitContainer>
    );
};

enum EHabit {
    ADD = 'add',
    CREATE = 'create',
    EDIT = 'edit',
}
export const Habit = (props: {}) => {
    const { t } = useTranslation();
    const [mode, setMode] = useState<EHabit>(EHabit.ADD);

    return (
        <HabitContainer>
            {mode === EHabit.ADD && (
                <AddHabitContainer
                    onPress={() => setMode(EHabit.CREATE)}
                    children={<AddHabitLabel children={t('addHabit')} />}
                />
            )}
            {mode === EHabit.CREATE && (
                <CreateHabit onCancel={() => setMode(EHabit.ADD)} />
            )}
        </HabitContainer>
    );
};
