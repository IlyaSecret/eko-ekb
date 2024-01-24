import { FlatList, StyleSheet, Text, View } from "react-native";
import NewsLine from "./news-line";

function NewsItem({ title, items }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.itemsContainer}>
                {items.map((item) => (
                    <NewsLine item={item} key={item.id} />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 18,
        paddingTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#000',
        paddingBottom: 20
    },
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default NewsItem;
