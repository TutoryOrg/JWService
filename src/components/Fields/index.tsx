import {
    AddButtonContainer,
    ButtonText,
    ControlContainer,
    Field,
    FieldContainer,
    SubButtonContainer,
    Title,
    Value,
    ValueContainer,
} from './styled';
import { useTranslation } from 'react-i18next';

export function Fields(props: { fields: any[] }) {
    const { t } = useTranslation();

    return (
        <FieldContainer>
            {props.fields.map((field, index) => {
                return (
                    <Field key={index}>
                        <Title>{t(field.title)}</Title>
                        <ValueContainer>
                            <Value>{field.value}</Value>
                            <ControlContainer>
                                <SubButtonContainer children={<ButtonText children={'-'} />} />
                                <AddButtonContainer children={<ButtonText children={'+'} />} />
                            </ControlContainer>
                        </ValueContainer>
                    </Field>
                );
            })}
        </FieldContainer>
    );
}
