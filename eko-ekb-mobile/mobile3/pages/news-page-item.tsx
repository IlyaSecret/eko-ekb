import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const BahiliComponent = () => {
    return (
        <ScrollView>
        <View style={styles.bahili}>

            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.headerTitle}>Нужны ли нам одноразовые бахилы</Text>
                </View>
                <Image style={styles.photoBahili} source={require('../assets/news/bahili.jpg')} />
            </View>

            <View>
                <Text style={styles.mainTitleText}>И чем их заменить</Text>

                <Text style={styles.mainText}>
                    Одноразовые бахилы используют в поликлиниках, больницах, а теперь ещё в детских садах, школах, фитнес-центрах. Бахилы стали привычным спутником нашей жизни. Каждый день тысячи таких изделий становятся мусором, разлетаются по улицам, а потом попадают на свалки.{' '}
                    <Text style={styles.boldText}>Разбираемся, насколько бахилы действительно необходимы и чем можно их заменить.</Text>
                </Text>

                <Text style={styles.mainTitleText2}>Бахилы не защищают от инфекций</Text>

                <Text style={styles.mainText}>
                    Отказываться от бахил в поликлиниках нестрашно: они всё равно не защищают от бактерий и вирусов.
                    {'\n\n'}
                    Нет ни одного научного исследования, которое бы доказывало обратное. Специализированные медицинские бахилы могут понадобиться, например, в сверхстерильных помещениях: операционном блоке, помещении для лечения пациентов с иммунной супрессией, куда доктор одевается, меняя всю одежду, при работе в лаборатории с особо опасными инфекциями, где сотрудники тоже меняют всю одежду.
                    {'\n\n'}
                    Бахилы, наоборот, могут стать источником передачи инфекций. Когда мы их надеваем и снимаем, то контактируем с уличной грязью. Если же человек использует одноразовые бахилы несколько раз или вынимает старые из мусорного ведра в поликлинике, то происходит контакт «рука-рука»: кто-то уже трогал эти бахилы.
                    {'\n\n'}
                    Руки — это основной источник передачи инфекционных болезней, кроме воздушно-капельного. Так, в европейских странах или США в больницах никто и никогда не здоровается рукопожатием. Нет контактного способа открывания дверей, нет ручек. Везде двери автоматические, потому что руки — это основной источник переноса внутрибольничной флоры в стационарах.
                    {'\n\n'}
                    Кроме того, бахилы неудобно надевать беременным, людям с инвалидностью. В бахилах есть риск поскользнуться и получить травму.
                </Text>

            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,

    },
    bahili: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    photoBahili: {
        width: '100%',
        height: 200,
        alignSelf: 'center',

    },
    header: {

    },
    headerText: {
    },
    headerDate: {

    },
    headerDateText: {
    },
    headerTitle: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        paddingBottom: 20
    },
    mainTitleText: {
        fontWeight: '500',
        color: '#000',
        fontSize: 20,
        paddingBottom: 8,
        paddingTop: 20
    },
    mainTitleText2: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#000',
        paddingTop: 20,
        paddingBottom: 15
    },
    mainText: {
        color: '#000',
        lineHeight: 20

    },
    boldText: {
        fontWeight: 'bold',
    },
    // Добавьте остальные стили по необходимости
});

export default BahiliComponent;
