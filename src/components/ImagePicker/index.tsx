// import { useRef } from 'react';
// import { useAtom } from 'jotai';
// import { useTheme } from 'styled-components/native';
// import { contentAtom, modalAtom } from 'navigation/Menu';
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
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
	// const { themeName } = useTheme();
	// const cameraRef = useRef<any>();
	// const [isOpen, setOpen] = useAtom(modalAtom);
	// const [content, setContent] = useAtom(contentAtom);

	// const WebCamera = () => {
	// 	const takePicture = async () => {
	// 		const options = {
	// 			quality: 1,
	// 			base64: true,
	// 			mirror: false,
	// 			flash: false,
	// 		};
	//
	// 		const pic = await cameraRef?.current?._cameraRef?.current?.takePicture(options);
	//
	// 		if (pic?.uri) {
	// 			const manipResult = await manipulateAsync(pic?.uri, [{ rotate: 0 }, { flip: FlipType.Horizontal }], {
	// 				compress: 1,
	// 				format: SaveFormat.PNG,
	// 			});
	// 			onChangeImage(manipResult?.uri);
	// 			setOpen(false);
	// 		}
	// 	};
	//
	// 	return (
	// 		<CameraView ref={cameraRef}>
	// 			<View style={{ height: 500, width: 500 }}>
	// 				<TouchableOpacity
	// 					style={{ height: 500, width: 500, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
	// 					onPress={takePicture}
	// 				>
	// 					<Image
	// 						source={
	// 							themeName === 'darkTheme'
	// 								? require('../../../assets/icons/black_camera.png')
	// 								: require('../../../assets/icons/white_camera.png')
	// 						}
	// 					/>
	// 				</TouchableOpacity>
	// 			</View>
	// 		</CameraView>
	// 	);
	// };

	// const OptionsModal = () => {
	// 	return (
	// 		<OptionsContainer>
	// 			<TouchableOpacity onPress={pickImageWithGallery}>
	// 				<Image
	// 					source={
	// 						themeName === 'darkTheme'
	// 							? require('../../../assets/icons/black_gallery.png')
	// 							: require('../../../assets/icons/white_gallery.png')
	// 					}
	// 				/>
	// 			</TouchableOpacity>
	// 			<TouchableOpacity onPress={() => setContent(WebCamera)}>
	// 				<Image
	// 					source={
	// 						themeName === 'darkTheme'
	// 							? require('../../../assets/icons/black_camera.png')
	// 							: require('../../../assets/icons/white_camera.png')
	// 					}
	// 				/>
	// 			</TouchableOpacity>
	// 		</OptionsContainer>
	// 	);
	// };

	const pickImageWithGallery = async () => {
		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (result.assets) {
			onChangeImage(result.assets[0].uri);
		}
	};

	return (
		<ImagePickerContainer>
			{/* <ImageContainer disabled={!editable} onPress={isAndroid || isIOs ? openOptions : pickImageWithGallery}>*/}
			<ImageContainer disabled={!editable} onPress={pickImageWithGallery}>
				{!_.isEmpty(image) && <ImageViewer resizeMode={'cover'} source={{ uri: image }} />}
			</ImageContainer>
			<CommentDesc value={desc} editable={editable} onChangeText={onAddDesc} maxLength={25} />
		</ImagePickerContainer>
	);
};
