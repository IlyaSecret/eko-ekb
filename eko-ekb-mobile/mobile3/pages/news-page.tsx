import {FlatList, StyleSheet, Text, View} from "react-native";
import { news } from "../mocks/news";
import React, { useEffect, useState } from "react";
import NewsItem from "../components/news-item";

function NewsPage() {
    const [newsItems, setNews] = useState([]);
    useEffect(() => {
        setNews(news);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={newsItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <NewsItem title={item.title} items={item.items} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})

export default NewsPage;
