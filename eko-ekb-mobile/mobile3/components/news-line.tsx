import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";
import { useNavigation } from '@react-navigation/native';

function NewsLine({ item }) {
    const resolvedImageSource = resolveAssetSource(item.img);
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate(' ');
    };
    return (
        <TouchableOpacity onPress={() => handlePress()} style={styles.container}>

                <Image source={item.img} style={styles.image} />
                <Text style={styles.text}>{item.title.slice(0, 22)}...</Text>
                <Text style={{paddingBottom: 24}}>{item.date}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '50%'
    },
    text: {
        fontSize: 16,
        color: '#000',
        paddingBottom: 8
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 12,
        marginBottom: 10
    }
});

export default NewsLine;
