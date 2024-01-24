import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";

function AboutUsPage() {
    return (
        <ScrollView>
        <View style={styles.aboutUs}>
            <View style={styles.aboutUsUp}>

                <Text style={styles.aboutUsText}>
                    <Text style={styles.green}>GreenLink</Text>&mdash;&nbsp;будущее экологии в&nbsp;ваших руках!
                </Text>

                <Text style={styles.aboutUsText}>
                    Наш сервис делает утилизацию отходов и&nbsp;переработку одежды <Text style={styles.green}>простой</Text> и&nbsp;
                    <Text style={styles.green}>вдохновляющей</Text>!
                </Text>

                <Text style={styles.aboutUsText}>
                    Присоединяйтесь к&nbsp;нам&nbsp;&mdash; <Text style={styles.green}>вместе</Text> мы&nbsp;создаем{' '}
                    <Text style={styles.green}>зеленую</Text> планету!
                </Text>
            </View>

            <View style={styles.aboutUsLinks}>
                <View style={styles.container}>
                    <View style={styles.block}>
                        <View>
                            <ImageBackground source={require('../assets/about-us/first.jpg')} style={styles.image1}>
                                <View style={styles.inner}>
                                    <Text style={styles.textImg}>Убираем мусор из Мирового океана</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View>
                            <ImageBackground source={require('../assets/about-us/2.jpg')} style={styles.image2}>
                                <View style={styles.inner}>
                                <Text style={styles.textImg}>Заняли в прошлом году первое место среди сервисов по переработке</Text>
                            </View></ImageBackground>
                        </View>
                    </View>
                    <View style={styles.block}>
                        <View>
                            <ImageBackground source={require('../assets/about-us/3.png')} style={styles.image2}>
                                <View style={styles.inner}>
                                    <Text style={styles.textImg}>Открываем новые точки для сдачи мусора</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View>
                            <ImageBackground source={require('../assets/about-us/4.png')} style={styles.image1}>
                                <View style={styles.inner}>
                                    <Text style={styles.textImg}>Сотрудничество с ЖизньМарт</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                </View>
            </View>

            <View >
                <View >
                    <Text style={styles.infoText}>
                        Наш эко-сервис разработан с целью облегчить поиск и утилизацию вещей, которые больше не нужны пользователям,
                        содействуя устойчивому потреблению и снижению отходов. Мы стремимся создать удобную платформу, позволяющую
                        легко находить ближайшие пункты сдачи и утилизации вещей, предоставляя подробную информацию о принимаемых
                        материалах и инструкции по правильной сдаче.
                    </Text>

                    <Text style={styles.infoText}>
                        Наши усилия направлены на стимулирование эффективного использования ресурсов и поддержку процессов переработки.
                        Мы убеждены, что наш сервис способствует экологической ответственности, помогая пользователям принимать
                        осознанные решения в отношении утилизации и переработки вещей.
                    </Text>

                    <Text style={styles.infoText}>
                        Мы также стремимся создать сообщество, где люди могут обмениваться опытом и идеями по устойчивому образу
                        жизни. Наша цель - вдохновить и объединить людей вокруг заботы о окружающей среде и совместного стремления к
                        созданию зеленого и устойчивого будущего. Присоединяйтесь к нам в этом важном путешествии к более экологичному
                        образу жизни!
                    </Text>
                </View>
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    aboutUs: {
        display: 'flex',
        flexDirection: 'column',
        gap: 60,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    aboutUsText: {
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: 30,
        margin: 0,
    },
    aboutUsUp: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    green: {
        color: '#8AC44B',
    },
    aboutUsPhotoHeader: {
        width: 100,
        height: 100
    },
    image1: {
        width: 190,
        height: 155,
        borderRadius: 16,
        overflow: 'hidden',
    },
    image2: {
        width: 140,
        height: 155,
        borderRadius: 16,
        overflow: 'hidden',
    },
    inner: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.40)',
        padding: 10
    },
    textImg: {
        color: '#fff',
        fontSize: 13
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
    },
    block: {
        display: 'flex',
        flexDirection: 'row',
        gap: 30
    },
    infoText: {
        fontSize: 13,
        lineHeight: 20
    }
});

export default AboutUsPage;
