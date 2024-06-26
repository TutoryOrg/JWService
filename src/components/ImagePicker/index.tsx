import { useAtom } from 'jotai';
import { contentAtom, modalAtom } from 'navigation/Menu';
import { useRef } from 'react';
import { isMobile } from 'utils/scaleFunctions';
import { CommentDesc, ImageViewer, ImageContainer, ImagePickerContainer, OptionsContainer } from './styled';
import {
    launchCameraAsync,
    useCameraPermissions,
    launchImageLibraryAsync,
} from 'expo-image-picker';
import _ from 'lodash';
import { Modal } from 'components';
import { View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

interface IImagePicker {
    image: string;
    desc: string;
    editable: boolean;
    onChangeImage: (uri: string) => void;
    onAddDesc: (des: string) => void;
}

export const ImagePicker = ({ desc, image, editable, onChangeImage, onAddDesc }: IImagePicker) => {
    const [status, requestPermission] = useCameraPermissions();
    const [isOpen, setOpen] = useAtom(modalAtom);
    const [content, setContent] = useAtom(contentAtom);
    const { themeName } = useTheme();

    if (!status?.granted) requestPermission();

    const pickImageAsync = async () => {
        if (!status?.granted) return;
        if (!editable) return;
        setOpen(true)
        setContent(OptionsModal())


        // let result = isMobile
        //     ? await launchCameraAsync({
        //           allowsEditing: true,
        //           quality: 1,
        //       })
        //     : await launchImageLibraryAsync({
        //           allowsEditing: true,
        //           quality: 1,
        //       });
        // if (result.assets) onChangeImage(result.assets[0].uri);
    };

    const OptionsModal = () => {
        return (
            <OptionsContainer>
                <TouchableOpacity>
                    <Image source={
                        themeName === 'darkTheme'
                            ? require('../../../assets/icons/black_gallery.png')
                            : require('../../../assets/icons/white_gallery.png')
                    } />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={
                        themeName === 'darkTheme'
                            ? require('../../../assets/icons/black_camera.png')
                            : require('../../../assets/icons/white_camera.png')
                    } />
                </TouchableOpacity>
            </OptionsContainer>
        )
    }

    return (
        <ImagePickerContainer>
            <ImageContainer disabled={!editable} onPress={pickImageAsync}>
                {!_.isEmpty(image) && <ImageViewer resizeMode={'cover'} source={{ uri: image }} />}
            </ImageContainer>
            <CommentDesc value={desc} editable={editable} onChangeText={onAddDesc} maxLength={25} />
        </ImagePickerContainer>
    );
};
