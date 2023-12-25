import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ButtonLabel,
    CancelButton,
    CreateButton,
    AddHabitLabel,
    HabitContainer,
    ShowHabitLabel,
    AddHabitContainer,
    CreateButtonLabel,
    ShowHabitContainer,
    CreateNewHabitInput,
    CreateHabitContainer,
    CreateButtonsContainer,
    ShowHabitButtonContainer,
    ShowHabitIndicator,
} from './styled';
import _ from 'lodash';
import styled from 'styled-components/native';
import { verticalScale } from 'utils/scaleFunctions';

const ShowHabit = (props: {
    habit: string;
    isDone: boolean;
    setIsDone: (done: boolean) => void;
}) => {
    const { habit, isDone, setIsDone } = props;

    const CheckButton = styled.TouchableOpacity`
        height: 80%;
        width: ${verticalScale(80)}px;
        justify-content: center;
        border-radius: 7px;
        border: 2px solid ${props => props.theme.borderColor};
        background-color: ${props => props.theme.gray};
    `;

    const CheckIndicator = styled.View<{ isDone: boolean }>`
        height: 100%;
        width: ${verticalScale(40)}px;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        border-right-width: 2px;
        border-right-style: solid;
        border-right-color: ${props =>
            props.isDone ? props.theme.borderColor : props.theme.selected};
        background-color: ${props =>
            props.isDone ? props.theme.selected : props.theme.bgColor};
        transform: translateX(
            ${props => (props.isDone ? verticalScale(39) : 0)}px
        );
    `;

    const OptionsButton = styled.TouchableOpacity`
        width: 20%;
        height: 100%;
        align-items: center;
        justify-content: center;
    `;

    return (
        <ShowHabitContainer>
            <ShowHabitLabel children={habit} />
            <ShowHabitButtonContainer>
                <CheckButton onPress={() => setIsDone(!isDone)}>
                    <CheckIndicator isDone={isDone}>
                        <ShowHabitIndicator
                            isDone={isDone}
                            children={isDone ? '✔' : '○'}
                        />
                    </CheckIndicator>
                </CheckButton>
                <OptionsButton children={<ButtonLabel children={':'} />} />
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
