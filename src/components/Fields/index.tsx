import { Field } from 'utils/constants';
import {
    Value,
    Title,
    FieldView,
    ButtonText,
    ValueContainer,
    FieldContainer,
    ControlContainer,
    SubButtonContainer,
    AddButtonContainer,
} from './styled';
import { useTranslation } from 'react-i18next';

interface IFields {
    fields: { key: string; value: string | number }[];
    onChangeField: (key: string, newValue: string | number) => void;
}
export function Fields({ fields, onChangeField }: IFields) {
    const { t } = useTranslation();

    const onSubValue = (key: Field) => {
        const value = fields.find(f => f.key === key)?.value;
        if (value === 0) return;
        if (typeof value === 'number') onChangeField(key, value - 1);
    };
    const onAddValue = (key: Field) => {
        const value = fields.find(f => f.key === key)?.value;
        if (typeof value === 'number') onChangeField(key, value + 1);
        if (typeof value === 'string') {
            console.log(value);
        }
    };

    return (
        <FieldContainer>
            {fields.map((field, index) => {
                return (
                    <FieldView key={index}>
                        <Title>{t(field.key)}</Title>
                        <ValueContainer>
                            <Value>{field.value}</Value>
                            <ControlContainer>
                                <SubButtonContainer
                                    onPress={() => onSubValue(field.key as Field)}
                                    children={<ButtonText children={'-'} />}
                                />
                                <AddButtonContainer
                                    onPress={() => onAddValue(field.key as Field)}
                                    children={<ButtonText children={'+'} />}
                                />
                            </ControlContainer>
                        </ValueContainer>
                    </FieldView>
                );
            })}
        </FieldContainer>
    );
}
