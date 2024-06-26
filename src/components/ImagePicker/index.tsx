import { useAtom } from 'jotai';
import { contentAtom, modalAtom } from 'navigation/Menu';
import { useRef, useState } from 'react';
import { CommentDesc, ImageViewer, ImageContainer, ImagePickerContainer, OptionsContainer } from './styled';
import {
    launchCameraAsync,
    useCameraPermissions,
    launchImageLibraryAsync,
} from 'expo-image-picker';
import { Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import _ from 'lodash';
import { Camera } from 'expo-camera';
import { isMobile } from 'utils/scaleFunctions';


interface IImagePicker {
    image: string;
    desc: string;
    editable: boolean;
    onChangeImage: (uri: string) => void;
    onAddDesc: (des: string) => void;
}

export const ImagePicker = ({ desc, image, editable, onChangeImage, onAddDesc }: IImagePicker) => {
    const [status, requestPermission] = useCameraPermissions();
    const { themeName } = useTheme();

    const [isOpen, setOpen] = useAtom(modalAtom);
    const [content, setContent] = useAtom(contentAtom);
    const [option, setOption] = useState<string | undefined>(undefined)

    if (!status?.granted) {
        Camera.requestCameraPermissionsAsync()
        requestPermission();
    }

    const openOptions = () => {
        if (!status?.granted) return;
        if (!editable) return;
        setOpen(true)
        setContent(OptionsModal())

    }

    const pickImageAsync = async (option: string) => {
        console.log({ option })
        console.log(_.isEqual(option, 'camera'))

        let result = option === 'camera'
            ? await launchCameraAsync({
                allowsEditing: true,
                quality: 1,
            })
            : await launchImageLibraryAsync({
                allowsEditing: true,
                quality: 1,
            });
        if (result.assets) { onChangeImage(result.assets[0].uri); setOpen(false) }
    };


    const OptionsModal = () => {
        return (
            <OptionsContainer>
                {/*<Camera style={{ height: 100, width: 100 }} />*/}
                <TouchableOpacity onPress={() => pickImageAsync('gallery')}>
                    <Image source={
                        themeName === 'darkTheme'
                            ? require('../../../assets/icons/black_gallery.png')
                            : require('../../../assets/icons/white_gallery.png')
                    } />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pickImageAsync('camera')}>
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
            <ImageContainer disabled={!editable} onPress={openOptions}>
                {!_.isEmpty(image) && <ImageViewer resizeMode={'cover'} source={{ uri: image }} />}
            </ImageContainer>
            <CommentDesc value={desc} editable={editable} onChangeText={onAddDesc} maxLength={25} />
        </ImagePickerContainer>
    );
};
