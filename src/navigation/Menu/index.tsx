import { atom } from 'jotai';
import { Screens } from 'utils/constants';
import { useTranslation } from 'react-i18next';
import { Today, Calendar, Stats } from 'screens';
import { memo, useMemo, useState } from 'react';
import {
	type IOption,
	type ISideMenu,
	Content,
	initOptions,
	TextContainer,
	MenuContainer,
	OptionContainer,
	SideMenuContainer,
} from './styled';
import { Modal } from 'components';
import { Text } from 'react-native';
import { useAtom } from 'jotai';

export const SideMenu = memo((props: ISideMenu) => {
	const { options, setOptions } = props;
	const { t } = useTranslation();

	const setSelected = (text: string) => {
		const updatedOptions: IOption[] = options.map((op) => ({
			...op,
			selected: text === op.text,
		}));
		setOptions(updatedOptions);
	};

	return (
		<SideMenuContainer>
			{options?.map((op, index) => (
				<OptionContainer
					key={index}
					disabled={op.selected}
					selected={op.selected}
					lastOne={op.lastOne}
					onPress={() => setSelected(op.text)}
				>
					<TextContainer selected={op.selected} children={t(op.text)} />
				</OptionContainer>
			))}
		</SideMenuContainer>
	);
});

export const modalAtom = atom(false);
export const contentAtom = atom(<Text>{''}</Text>);

export function Menu(props: { onLayoutRootView: () => Promise<void> }) {
	const { onLayoutRootView } = props;
	const [content] = useAtom(contentAtom);
	const [options, setOptions] = useState(initOptions);
	const [todayIndex, setTodayIndex] = useState<number>(0);

	const selected = useMemo(() => options.find((op) => op.selected === true)?.text, [options]);
	console.log({ selected });
	return (
		<MenuContainer onLayout={onLayoutRootView}>
			<SideMenu options={options} setOptions={setOptions} />
			<Content>
				{selected === Screens.TODAY && <Today index={todayIndex} setIndex={setTodayIndex} />}
				{selected === Screens.CALENDAR && <Calendar />}
				{selected === Screens.STATS && <Stats />}
				{/* 
                {selected === Screens.PROFILE && <Profile />}
                */}
			</Content>
			<Modal children={content} />
		</MenuContainer>
	);
}
