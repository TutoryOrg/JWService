import { IHabit } from 'screens/Today';
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
    habit: IHabit;
    setMode: (mode: EnumHabit) => void;
    removeHabit: (rHabit: IHabit) => void;
}) => {
    const { habit, setMode, removeHabit } = props;
    const [isEditOpt, setIsEditOpt] = useState<boolean>(false);

    return (
        <ShowHabitContainer>
            <ShowHabitLabel children={habit.label} />
            <ShowHabitButtonContainer>
                {isEditOpt ? (
                    <ShowOptionsContainer>
                        <ShowEditOptButtons
                            onPress={() => {
                                setIsEditOpt(false);
                                setMode(EnumHabit.EDIT);
                            }}
                            children={<ShowEditButtonLabel children={'✎'} />}
                        />
                        <ShowEditOptButtons
                            onPress={() => {
                                setIsEditOpt(false);
                                removeHabit(habit);
                                // setMode(EnumHabit.ADD);
                            }}
                            children={<ShowBasketButtonLabel children={'🗑'} />}
                        />
                    </ShowOptionsContainer>
                ) : (
                    <ShowCheckButton
                        onPress={() => console.log('setIsDone(!isDone)')}>
                        <ShowCheckIndicator isDone={habit.isDone}>
                            <ShowHabitIndicator
                                isDone={habit.isDone}
                                children={habit.isDone ? '✔' : '○'}
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
    label: string;
    mode: EnumHabit;
    setMode: (mode: EnumHabit) => void;
    addHabit: (habit: IHabit) => void;
}) => {
    const { label, mode, setMode, addHabit } = props;
    const [value, setValue] = useState<string>(label);
    const [editValue, setEditValue] = useState<string>('');

    return (
        <CreateHabitContainer>
            <CreateNewHabitInput
                autoFocus={true}
                maxLength={isMobile ? 10 : 20}
                placeholderTextColor={'gray'}
                placeholder={_.isEmpty(value) ? 'new habit' : value}
                value={mode === EnumHabit.EDIT ? editValue : value}
                onChangeText={txt => {
                    if (mode == EnumHabit.CREATE) {
                        setValue(txt);
                    }
                    if (mode == EnumHabit.EDIT) {
                        setEditValue(txt);
                    }
                }}
            />
            <CreateButtonsContainer>
                <CancelButton
                    onPress={() => {
                        if (_.isEmpty(label) && mode == EnumHabit.CREATE) {
                            setValue('');
                            setMode(EnumHabit.ADD);
                        }
                        if (!_.isEmpty(label) && mode == EnumHabit.CREATE) {
                            setValue('');
                            setMode(EnumHabit.SHOW);
                        }
                        if (mode == EnumHabit.EDIT) {
                            setMode(EnumHabit.SHOW);
                        }
                    }}
                    children={<IconsLabel children={'x'} />}
                />
                <CreateButton
                    onPress={() => {
                        if (!_.isEmpty(label) && mode == EnumHabit.CREATE) {
                            // addHabit({ label: value, isDone: false });
                            setMode(EnumHabit.ADD);
                        }
                        if (mode == EnumHabit.CREATE) {
                            setMode(
                                _.isEmpty(label)
                                    ? EnumHabit.ADD
                                    : EnumHabit.SHOW
                            );
                            // setMode(EnumHabit.ADD);
                            addHabit({ label: value, isDone: false });
                        }
                        if (mode == EnumHabit.EDIT) {
                            setMode(EnumHabit.SHOW);
                            setValue(editValue);
                        }
                    }}
                    disabled={
                        (mode === EnumHabit.EDIT && _.isEmpty(editValue)) ||
                        (mode === EnumHabit.CREATE && _.isEmpty(value))
                    }
                    children={
                        <CreateButtonLabel
                            disabled={
                                (mode === EnumHabit.EDIT &&
                                    _.isEmpty(editValue)) ||
                                (mode === EnumHabit.CREATE && _.isEmpty(value))
                            }
                            children={'✔'}
                        />
                    }
                />
            </CreateButtonsContainer>
        </CreateHabitContainer>
    );
};

enum EnumHabit {
    ADD = 'add',
    CREATE = 'create',
    SHOW = 'show',
    EDIT = 'edit',
}
export const Habit = (props: {
    habit: IHabit;
    addHabit: (h: IHabit) => void;
    removeHabit: (h: IHabit) => void;
}) => {
    const { habit, addHabit, removeHabit } = props;
    const { t } = useTranslation();

    const [mode, setMode] = useState<EnumHabit>(
        _.isEmpty(habit.label) ? EnumHabit.ADD : EnumHabit.SHOW
    );

    return (
        <HabitContainer>
            {mode === EnumHabit.ADD && (
                <AddHabitContainer
                    onPress={() => setMode(EnumHabit.CREATE)}
                    children={<AddHabitLabel children={t('addHabit')} />}
                />
            )}

            {(mode === EnumHabit.CREATE || mode === EnumHabit.EDIT) && (
                <CreateHabit
                    mode={mode}
                    label={habit.label}
                    setMode={setMode}
                    addHabit={addHabit}
                />
            )}

            {mode === EnumHabit.SHOW && (
                <ShowHabit
                    habit={habit}
                    setMode={setMode}
                    removeHabit={removeHabit}
                />
            )}
        </HabitContainer>
    );
};
