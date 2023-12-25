import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ButtonLabel,
    CancelButton,
    CreateButton,
    AddHabitLabel,
    HabitContainer,
    ShowHabitLabel,
    ShowCheckButton,
    AddHabitContainer,
    CreateButtonLabel,
    ShowOptionsButton,
    ShowHabitContainer,
    ShowCheckIndicator,
    ShowHabitIndicator,
    CreateNewHabitInput,
    CreateHabitContainer,
    CreateButtonsContainer,
    ShowHabitButtonContainer,
} from './styled';
import _ from 'lodash';

const ShowHabit = (props: {
    habit: string;
    isDone: boolean;
    setIsDone: (done: boolean) => void;
}) => {
    const { habit, isDone, setIsDone } = props;
    const [isEditOpt, setIsEditOpt] = useState<boolean>(false);

    return (
        <ShowHabitContainer>
            <ShowHabitLabel children={habit} />
            <ShowHabitButtonContainer>
                {isEditOpt ? (
                    <></>
                ) : (
                    <ShowCheckButton onPress={() => setIsDone(!isDone)}>
                        <ShowCheckIndicator isDone={isDone}>
                            <ShowHabitIndicator
                                isDone={isDone}
                                children={isDone ? '✔' : '○'}
                            />
                        </ShowCheckIndicator>
                    </ShowCheckButton>
                )}
                <ShowOptionsButton
                    onPress={() => setIsEditOpt(!isEditOpt)}
                    children={<ButtonLabel children={':'} />}
                />
            </ShowHabitButtonContainer>
        </ShowHabitContainer>
    );
};

export const CreateHabit = (props: {
    habit: string;
    setHabit: Function;
    setMode: (mode: EHabit) => void;
}) => {
    const { habit, setHabit, setMode } = props;
    return (
        <CreateHabitContainer>
            <CreateNewHabitInput
                value={habit}
                autoFocus={true}
                placeholder={_.isEmpty(habit) ? 'new habit' : habit}
                placeholderTextColor={'gray'}
                onChangeText={txt => setHabit(txt)}
            />
            <CreateButtonsContainer>
                <CancelButton
                    onPress={() => {
                        setHabit('');
                        setMode(EHabit.ADD);
                    }}
                    children={<ButtonLabel children={'x'} />}
                />
                <CreateButton
                    onPress={() => setMode(EHabit.SHOW)}
                    value={habit}
                    disabled={_.isEmpty(habit)}
                    children={
                        <CreateButtonLabel value={habit} children={'✔'} />
                    }
                />
            </CreateButtonsContainer>
        </CreateHabitContainer>
    );
};

enum EHabit {
    ADD = 'add',
    CREATE = 'create',
    SHOW = 'show',
    EDIT = 'edit',
}
export const Habit = (props: {}) => {
    const { t } = useTranslation();
    const [habit, setHabit] = useState<string>('');
    const [isDone, setIsDone] = useState<boolean>(false);
    const [mode, setMode] = useState<EHabit>(
        _.isEmpty(habit) ? EHabit.ADD : EHabit.SHOW
    );

    return (
        <HabitContainer>
            {mode === EHabit.ADD && (
                <AddHabitContainer
                    onPress={() => setMode(EHabit.CREATE)}
                    children={<AddHabitLabel children={t('addHabit')} />}
                />
            )}

            {mode === EHabit.CREATE && (
                <CreateHabit
                    habit={habit}
                    setMode={setMode}
                    setHabit={setHabit}
                />
            )}

            {mode === EHabit.SHOW && (
                <ShowHabit
                    habit={habit}
                    isDone={isDone}
                    setIsDone={setIsDone}
                />
            )}
        </HabitContainer>
    );
};
