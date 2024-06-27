import { useAtom } from 'jotai';
import { useTheme } from 'styled-components/native';
import { isAndroid, isIOs } from 'utils/scaleFunctions';
import { contentAtom, modalAtom } from 'navigation/Menu';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { CommentDesc, ImageViewer, ImageContainer, ImagePickerContainer, OptionsContainer } from './styled';
import {
    launchCameraAsync,
    useCameraPermissions,
    launchImageLibraryAsync,
} from 'expo-image-picker';
import _ from 'lodash';
import { CameraView, Camera } from 'expo-camera';
import { useRef } from 'react';

interface IImagePicker {
    image: string;
    desc: string;
    editable: boolean;
    onChangeImage: (uri: string) => void;
    onAddDesc: (des: string) => void;
}

export const ImagePicker = ({ desc, image, editable, onChangeImage, onAddDesc }: IImagePicker) => {
    const { themeName } = useTheme();
    const [status, requestPermission] = useCameraPermissions();

    const [isOpen, setOpen] = useAtom(modalAtom);
    const [content, setContent] = useAtom(contentAtom);

    if (!status?.granted) {
        // Camera.getCameraPermissionsAsync()
        requestPermission();
    }

    const openOptions = () => {
        if (!status?.granted) return;
        if (!editable) return;
        setOpen(true)
        setContent(OptionsModal())

    }

    const pickImageWithGallery = async () => {
        let result = await launchCameraAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (result.assets) { onChangeImage(result.assets[0].uri); setOpen(false) }
    }

    const pickImageWithCamera = async () => {
        if (isIOs || isAndroid) {
            let result = await launchImageLibraryAsync({
                allowsEditing: true,
                quality: 1,
            });
            if (result.assets) { onChangeImage(result.assets[0].uri); setOpen(false) }
        } else {
            const permission = await Camera.requestCameraPermissionsAsync()
            console.log({ permission })
            if (permission && permission?.granted) setContent(WebCamera())
        }
    }

    const cameraRef = useRef<any>()

    const WebCamera = () => {
        const takePicture = async () => {
            console.log({ CameraView })
            console.log({ Camera })
            console.log({ cameraRef })
            const options = {
                quality: 1,
                base64: true
            }
            const pic = await cameraRef?.current?._cameraRef?.current?.takePicture(options)
            if (pic?.uri) { onChangeImage(pic.uri); setOpen(false) }
        }
        return (
            <CameraView ref={cameraRef}>
                <View style={{}}>
                    <TouchableOpacity onPress={takePicture} style={{}}>
                        <Text style={{}}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        )
    }


    const OptionsModal = () => {
        return (
            <OptionsContainer>
                <TouchableOpacity onPress={pickImageWithGallery}>
                    <Image source={
                        themeName === 'darkTheme'
                            ? require('../../../assets/icons/black_gallery.png')
                            : require('../../../assets/icons/white_gallery.png')
                    } />
                </TouchableOpacity>
                <TouchableOpacity onPress={pickImageWithCamera}>
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
