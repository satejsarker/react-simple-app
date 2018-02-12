import React from 'react';
import { Text, View, Image ,Linking} from 'react-native';
import Card from './Card';
import CardSelection from './CardSelection';
import Button from './Button';

const AlbumDetails = ({ albumData }) => {
    const { title, artist, thumbnail_image, image,url } = albumData;
    const { thumbnailStyle, thumbnailContainer,
        headerContentStyle,
    headerTextStyle,
    imageStyle
} = styles;
    return (<Card>
        <CardSelection >
            <View style={thumbnailContainer} >
                <Image
                    style={thumbnailStyle}
                source={{ uri: thumbnail_image }}
                />

        </View>
        <View style={headerContentStyle} >
        <Text style={headerTextStyle}> { title } </Text>
        <Text > { artist } </Text>
         </View>
         </CardSelection>
        <CardSelection >
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />

        </CardSelection>
        <CardSelection>
        <Button onPress={() => Linking.openURL(url)}>
            Buy Now! </Button>
            </CardSelection>
         </Card>
    );
 };

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',    
    },
    headerTextStyle: {
        fontSize: 19,
        alignItems: 'center',
    },
    thumbnailStyle: {
        height: 60,
        width: 60
    },
    thumbnailContainer: {
        justifyContent: 'center', 
        marginLeft: 5,
        marginRight: 5,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetails;
 