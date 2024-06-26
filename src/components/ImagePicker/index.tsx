import { useAtom } from 'jotai';
import { modalAtom } from 'navigation/Menu';
import { useRef } from 'react';
import { isMobile } from 'utils/scaleFunctions';
import { CommentDesc, ImageViewer, ImageContainer, ImagePickerContainer } from './styled';
import {
    launchCameraAsync,
    useCameraPermissions,
    launchImageLibraryAsync,
} from 'expo-image-picker';
import _ from 'lodash';
import { Modal } from 'components';

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

    if (!status?.granted) requestPermission();

    const pickImageAsync = async () => {
        setOpen(true)
        // if (!status?.granted) return;
        // if (!editable) return;
        //
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

    return (
        <ImagePickerContainer>
            <ImageContainer disabled={!editable} onPress={pickImageAsync}>
                {!_.isEmpty(image) && <ImageViewer resizeMode={'cover'} source={{ uri: image }} />}
            </ImageContainer>
            <CommentDesc value={desc} editable={editable} onChangeText={onAddDesc} maxLength={25} />
        </ImagePickerContainer>
    );
};
