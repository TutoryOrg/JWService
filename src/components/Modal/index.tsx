import { useAtom } from 'jotai';
import { useTheme } from 'styled-components/native';
import { contentAtom, modalAtom } from 'navigation/Menu';
import { CloseButton, Icon, ModalContainer } from './styled';
import { Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';

interface IModal {
	children: JSX.Element;
}

export const Modal = (props: IModal) => {
	const { children } = props;
	const { themeName } = useTheme();
	const [isOpen, setOpen] = useAtom(modalAtom);
	const [content, setContent] = useAtom(contentAtom);

	useEffect(() => {
		if (!isOpen) setContent(<></>);
	}, [isOpen, setContent]);

	return (
		<ModalContainer isOpen={isOpen}>
			<View>{children}</View>
			<CloseButton onPress={() => setOpen(false)}>
				<Icon
					source={
						themeName === 'darkTheme'
							? require('../../../assets/icons/black_close.png')
							: require('../../../assets/icons/white_close.png')
					}
				/>
			</CloseButton>
		</ModalContainer>
	);
};
