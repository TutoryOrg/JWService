import { Screens } from 'utils/constants';
import { memo, useMemo, useState } from 'react';
import { Today, Calendar, Goals, Profile } from 'screens';
import { useTranslation } from 'react-i18next';
import {
    Content,
    IOption,
    ISideMenu,
    initOptions,
    IMenuOption,
    TextContainer,
    MenuContainer,
    OptionContainer,
    SideMenuContainer,
} from './styled';

export const Option = memo((props: IMenuOption) => {
    const { text, selected, lastOne, setSelected } = props;
    const { t } = useTranslation();

    return (
        <OptionContainer
            disabled={selected}
            selected={selected}
            lastOne={lastOne}
            onPress={() => setSelected(text)}>
            <TextContainer selected={selected} children={t(text)} />
        </OptionContainer>
    );
});

export const SideMenu = memo((props: ISideMenu) => {
    const { options, setOptions } = props;
    const setSelected = (text: string) => {
        const updatedOptions: IOption[] = options.map(op => ({
            ...op,
            selected: text === op.text,
        }));
        setOptions(updatedOptions);
    };
    return (
        <SideMenuContainer>
            {options?.map((op, index) => (
                <Option key={index} setSelected={setSelected} {...op} />
            ))}
        </SideMenuContainer>
    );
});

export function Menu() {
    const [options, setOptions] = useState(initOptions);
    const selected = useMemo(() => options.find(op => op.selected === true)?.text, [options]);

    return (
        <MenuContainer>
            <SideMenu options={options} setOptions={setOptions} />
            <Content>
                {selected === Screens.TODAY && <Today />}
                {selected === Screens.GOALS && <Goals />}
                {selected === Screens.PROFILE && <Profile />}
                {selected === Screens.CALENDAR && <Calendar />}
            </Content>
        </MenuContainer>
    );
}
