import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import EntryDate from './EntryDate';
import Select from './Select';


export default function InterfaceThirteen() {
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#ffffff" />

            <View style={styles.subContainer}>
                <AntDesign name="arrowleft" style={styles.iconArrowLeft} />
                <Text style={styles.textEducation}>Education</Text>
                <Feather name="trash" style={styles.iconTrash} />
            </View>

            <EntryDate />
            <Select />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    subContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 30,
        marginVertical: 40,
        marginTop: 70,
    },

    textEducation: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#212121",
        marginLeft: "-45%",
    },

    iconArrowLeft: {
        color: "black",
        marginLeft: -2,
        fontSize: 25,
    },

    iconTrash: {
        color: "#f86464",
        fontSize: 25,
    },
});