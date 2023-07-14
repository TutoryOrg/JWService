import { Text } from 'react-native';
import { Fields } from 'utils/constants';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { launchImageLibraryAsync } from 'expo-image-picker';
import * as ExpoImagePicker from 'expo-image-picker';
import {
    Day,
    Month,
    Title,
    Value,
    Field,
    DateContainer,
    TodayContainer,
    FieldContainer,
    ImageContainer,
    HeaderContainer,
    CommentContainer,
    ImageViewer,
} from './styled';

const initFields = [
    { title: Fields.TIME, value: '0h 0min' },
    { title: Fields.PUBLICATIONS, value: '_' },
    { title: Fields.VIDEOS, value: '_' },
    { title: Fields.RETURN_VISITS, value: '_' },
    { title: Fields.BIBLE_STUDIES, value: '_' },
];

export const ImagePicker = ({ selectedImage, setSelectedImage }: any) => {
    const pickImageAsync = async () => {
        let result = await ExpoImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (result.assets) setSelectedImage(result.assets[0].uri);
    };

    return (
        <>
            {selectedImage === null ? (
                <ImageContainer onPress={pickImageAsync} />
            ) : (
                <ImageContainer onPress={pickImageAsync}>
                    <ImageViewer source={{ uri: selectedImage }} />
                </ImageContainer>
            )}
        </>
    );
};

export function Today() {
    const { t } = useTranslation();
    const [fields] = useState(initFields);
    const [selectedImage, setSelectedImage] = useState(null);
    const date = { day: '4.Monday', month: 'July' };
    const progress = 70;

    return (
        <TodayContainer>
            <HeaderContainer>
                <DateContainer>
                    <Month>{date.month}</Month>
                    <Day>{date.day}</Day>
                </DateContainer>
                <Text style={{ fontFamily: 'Cascadia' }}>Progress {progress}</Text>
            </HeaderContainer>

            <FieldContainer>
                {fields.map((field, index) => (
                    <Field key={index}>
                        <Title>{t(field.title)}</Title>
                        <Value>{field.value}</Value>
                    </Field>
                ))}
            </FieldContainer>

            <CommentContainer editable multiline maxLength={100} numberOfLines={4} />

            <ImagePicker selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </TodayContainer>
    );
}
