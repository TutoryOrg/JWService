import { isMobile } from 'utils/scaleFunctions';
import { launchImageLibraryAsync, launchCameraAsync } from 'expo-image-picker';
import { CommentDesc, ImageViewer, ImageContainer, ImagePickerContainer } from './styled';
import _ from 'lodash';

interface IImagePicker {
    image: string;
    desc: string;
    editable: boolean;
    onChangeImage: (uri: string) => void;
    onAddDesc: (des: string) => void;
}

export const ImagePicker = ({ desc, image, editable, onChangeImage, onAddDesc }: IImagePicker) => {
    const pickImageAsync = async () => {
        if (!editable) return;

        let result = isMobile
            ? await launchCameraAsync({
                  allowsEditing: true,
                  quality: 1,
              })
            : await launchImageLibraryAsync({
                  allowsEditing: true,
                  quality: 1,
              });
        if (result.assets) onChangeImage(result.assets[0].uri);
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
