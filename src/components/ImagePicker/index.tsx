import { launchImageLibraryAsync } from 'expo-image-picker';
import { ImageContainer, ImageViewer } from './styled';

interface IImagePicker {
    image: string | null;
    onChangeImage: (uri: string) => void;
}
export const ImagePicker = ({ image, onChangeImage }: IImagePicker) => {
    const pickImageAsync = async () => {
        let result = await launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (result.assets) onChangeImage(result.assets[0].uri);
    };

    return (
        <ImageContainer onPress={pickImageAsync}>
            {image && <ImageViewer source={{ uri: image }} />}
        </ImageContainer>
    );
};
