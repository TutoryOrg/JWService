import { useState } from 'react';
import { isMobile } from 'utils/scaleFunctions';
import { useTranslation } from 'react-i18next';
import {
    IconsLabel,
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
    ShowEditButtonLabel,
    ShowBasketButtonLabel,
    ShowOptionsContainer,
    CreateHabitContainer,
    CreateButtonsContainer,
    ShowHabitButtonContainer,
    ShowEditOptButtons,
} from './styled';
import _ from 'lodash';

const ShowHabit = (props: {
    habit: string;
    isDone: boolean;
    setMode: (mode: EHabit) => void;
    setHabit: (habit: string) => void;
    setIsDone: (done: boolean) => void;
}) => {
    const { habit, isDone, setMode, setHabit, setIsDone } = props;
    const [isEditOpt, setIsEditOpt] = useState<boolean>(false);

    return (
        <ShowHabitContainer>
            <ShowHabitLabel children={habit} />
            <ShowHabitButtonContainer>
                {isEditOpt ? (
                    <ShowOptionsContainer>
                        <ShowEditOptButtons
                            onPress={() => {
                                setIsDone(false);
                                setIsEditOpt(false);
                                setMode(EHabit.EDIT);
                            }}
                            children={<ShowEditButtonLabel children={'✎'} />}
                        />
                        <ShowEditOptButtons
                            onPress={() => {
                                setHabit('');
                                setIsDone(false);
                                setMode(EHabit.ADD);
                                setIsEditOpt(false);
                            }}
                            children={<ShowBasketButtonLabel children={'🗑'} />}
                        />
                    </ShowOptionsContainer>
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
    mode: EHabit;
    setHabit: Function;
    setMode: (mode: EHabit) => void;
}) => {
    const { habit, mode, setHabit, setMode } = props;
    const [editValue, setEditValue] = useState<string>('');

    return (
        <CreateHabitContainer>
            <CreateNewHabitInput
                autoFocus={true}
                maxLength={isMobile ? 10 : 20}
                placeholderTextColor={'gray'}
                placeholder={_.isEmpty(habit) ? 'new habit' : habit}
                value={mode === EHabit.EDIT ? editValue : habit}
                onChangeText={txt => {
                    if (mode == EHabit.CREATE) {
                        setHabit(txt);
                    }
                    if (mode == EHabit.EDIT) {
                        setEditValue(txt);
                    }
                }}
            />
            <CreateButtonsContainer>
                <CancelButton
                    onPress={() => {
                        if (mode == EHabit.CREATE) {
                            setHabit('');
                            setMode(EHabit.ADD);
                        }
                        if (mode == EHabit.EDIT) {
                            setMode(EHabit.SHOW);
                        }
                    }}
                    children={<IconsLabel children={'x'} />}
                />
                <CreateButton
                    onPress={() => {
                        setMode(EHabit.SHOW);
                        if (mode == EHabit.EDIT) {
                            setHabit(editValue);
                        }
                    }}
                    disabled={
                        (mode === EHabit.EDIT && _.isEmpty(editValue)) ||
                        (mode === EHabit.CREATE && _.isEmpty(habit))
                    }
                    children={
                        <CreateButtonLabel
                            disabled={
                                (mode === EHabit.EDIT &&
                                    _.isEmpty(editValue)) ||
                                (mode === EHabit.CREATE && _.isEmpty(habit))
                            }
                            children={'✔'}
                        />
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

            {(mode === EHabit.CREATE || mode === EHabit.EDIT) && (
                <CreateHabit
                    habit={habit}
                    mode={mode}
                    setMode={setMode}
                    setHabit={setHabit}
                />
            )}

            {mode === EHabit.SHOW && (
                <ShowHabit
                    habit={habit}
                    isDone={isDone}
                    setMode={setMode}
                    setHabit={setHabit}
                    setIsDone={setIsDone}
                />
            )}
        </HabitContainer>
    );
};
