import { genUid } from 'light-uid';
import { IHabit } from 'store/redux/habits';
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
    editable: boolean;
    setMode: (mode: EnumHabit) => void;
    editHabit: (rHabit: IHabit) => void;
    removeHabit: (rHabit: IHabit) => void;
}) => {
    const { habit, editable, setMode, editHabit, removeHabit } = props;
    const [isEditOpt, setIsEditOpt] = useState<boolean>(false);

    return (
        <ShowHabitContainer>
            <ShowHabitLabel children={habit?.label} />
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
                            }}
                            children={<ShowBasketButtonLabel children={'🗑'} />}
                        />
                    </ShowOptionsContainer>
                ) : (
                    <ShowCheckButton
                        disabled={!editable}
                        onPress={() => editHabit({ ...habit, isDone: !habit.isDone })}>
                        <ShowCheckIndicator isDone={habit.isDone}>
                            <ShowHabitIndicator
                                isDone={habit.isDone}
                                children={habit.isDone ? '✔' : '○'}
                            />
                        </ShowCheckIndicator>
                    </ShowCheckButton>
                )}
                <ShowOptionsButton
                    disabled={!editable}
                    onPress={() => setIsEditOpt(!isEditOpt)}
                    children={<ButtonLabel children={':'} />}
                />
            </ShowHabitButtonContainer>
        </ShowHabitContainer>
    );
};

export const CreateHabit = (props: {
    habit: IHabit;
    mode: EnumHabit;
    editable: boolean;
    setMode: (mode: EnumHabit) => void;
    addHabit: (habit: IHabit) => void;
    editHabit: (habit: IHabit) => void;
}) => {
    const { habit, mode, editable, setMode, editHabit, addHabit } = props;
    const [value, setValue] = useState<string>(habit?.label);
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
                        if (_.isEmpty(habit?.label) && mode == EnumHabit.CREATE) {
                            setValue('');
                            setMode(EnumHabit.ADD);
                        }
                        if (!_.isEmpty(habit?.label) && mode == EnumHabit.CREATE) {
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
                        if (!_.isEmpty(habit?.label) && mode == EnumHabit.CREATE) {
                            setMode(EnumHabit.ADD);
                        }
                        if (mode == EnumHabit.CREATE) {
                            setMode(_.isEmpty(habit?.label) ? EnumHabit.ADD : EnumHabit.SHOW);
                            addHabit({
                                id: genUid(),
                                label: value,
                                isDone: false,
                            });
                        }
                        if (mode == EnumHabit.EDIT) {
                            setMode(EnumHabit.SHOW);
                            setValue(editValue);
                            editHabit({ ...habit, label: editValue });
                        }
                    }}
                    disabled={
                        (mode === EnumHabit.EDIT && _.isEmpty(editValue)) ||
                        (mode === EnumHabit.CREATE && _.isEmpty(value))
                    }
                    children={
                        <CreateButtonLabel
                            disabled={
                                (mode === EnumHabit.EDIT && _.isEmpty(editValue)) ||
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
    editable: boolean;
    addHabit: (h: IHabit) => void;
    editHabit: (h: IHabit) => void;
    removeHabit: (h: IHabit) => void;
}) => {
    const { habit, editable, addHabit, editHabit, removeHabit } = props;
    const { t } = useTranslation();

    const [mode, setMode] = useState<EnumHabit>(
        _.isEmpty(habit?.label) ? EnumHabit.ADD : EnumHabit.SHOW
    );

    return (
        <HabitContainer>
            {mode === EnumHabit.ADD && (
                <AddHabitContainer
                    disabled={!editable}
                    onPress={() => setMode(EnumHabit.CREATE)}
                    children={<AddHabitLabel children={t('addHabit')} />}
                />
            )}

            {(mode === EnumHabit.CREATE || mode === EnumHabit.EDIT) && (
                <CreateHabit
                    mode={mode}
                    habit={habit}
                    editable={editable}
                    setMode={setMode}
                    addHabit={addHabit}
                    editHabit={editHabit}
                />
            )}

            {mode === EnumHabit.SHOW && (
                <ShowHabit
                    habit={habit}
                    editable={editable}
                    setMode={setMode}
                    editHabit={editHabit}
                    removeHabit={removeHabit}
                />
            )}
        </HabitContainer>
    );
};
