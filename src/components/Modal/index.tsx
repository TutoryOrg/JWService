import { useAtom } from 'jotai';
import { useTheme } from 'styled-components/native';
import { modalAtom } from 'navigation/Menu';
import { CloseButton, Icon, ModalContainer } from './styled';
import { Text, TouchableOpacity, View } from 'react-native';

interface IModal {
    children: JSX.Element;
}

export const Modal = (props: IModal) => {
    const { children } = props;
    const [isOpen, setOpen] = useAtom(modalAtom);
    const { themeName } = useTheme();

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
    )
};
