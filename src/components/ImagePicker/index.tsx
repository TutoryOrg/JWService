import { launchImageLibraryAsync } from 'expo-image-picker';
import { ImageContainer, ImageViewer } from './styled';

export const ImagePicker = ({ selectedImage, setSelectedImage }: any) => {
    const pickImageAsync = async () => {
        let result = await launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (result.assets) setSelectedImage(result.assets[0].uri);
    };

    return (
        <ImageContainer onPress={pickImageAsync}>
            <ImageViewer source={{ uri: selectedImage }} />
        </ImageContainer>
    );
};
