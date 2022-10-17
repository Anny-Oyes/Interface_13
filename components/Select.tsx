import { StyleSheet, Text, View } from 'react-native';
import {
    AntDesign,
    Entypo
} from '@expo/vector-icons';

export default function Select() {
    return (

        <View style={styles.subContainer}>

            <View style={styles.containerDiv}>
                <Text style={styles.FirstText}>From</Text>
                <Text style={styles.textTo}>To</Text>
            </View>

            <View style={styles.containerDiv}>
                <View style={styles.containerStart}>
                    <Text style={styles.textEntry}>July 2021</Text>
                    <AntDesign name="caretdown" style={styles.iconCaretdown} />
                </View>

                <View style={styles.containerStartTwo}>
                    <Text style={styles.textEntry}>Agust 2022</Text>
                    <AntDesign name="caretdown" style={styles.iconCaretdown} />
                </View>
            </View>

            <View style={styles.containerDiv}>
                <Text style={styles.FirstText}>Graduated</Text>
                <Entypo name="switch" style={styles.iconSwitch} />
            </View>

            <View style={styles.containerDiv}>
                <Text style={styles.FirstText}>GPA (Optional)</Text>
                <Text style={styles.textScale}>Scale</Text>
            </View>

            <View style={styles.containerDiv}>
                <View style={styles.containerStart}>
                    <Text style={styles.textEntry}>3.85</Text>
                    <AntDesign name="caretdown" style={styles.iconCaretdown} />
                </View>

                <View style={styles.containerStartTwo}>
                    <Text style={styles.textEntry}>4.0</Text>
                    <AntDesign name="caretdown" style={styles.iconCaretdown} />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    subContainer: {
        marginHorizontal: 30,
        marginVertical: 40,
        marginTop: -40,
    },

    containerDiv: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textTo: {
        marginHorizontal: 150,
        marginVertical: 15,
    },

    textScale: {
        marginRight: 110,
        marginVertical: 15,
    },

    FirstText: {
        marginVertical: 15,
    },

    containerStart: {
        marginHorizontal: 40,
        backgroundColor: "#fafafa",
        Color: "#212121",
        width: "50%",
        height: 50,
        borderRadius: 15,
        flexDirection: "column",
        marginLeft: -10,
    },

    containerStartTwo: {
        marginHorizontal: 40,
        backgroundColor: "#fafafa",
        Color: "#212121",
        width: "50%",
        height: 50,
        borderRadius: 15,
        flexDirection: "column",
        marginLeft: -30,
    },

    textEntry: {
        fontSize: 15,
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 4,
        paddingHorizontal: 25,
        fontWeight: "bold",

    },

    iconCaretdown: {
        fontSize: 15,
        Color: "#212121",
        alignSelf: "flex-end",
        marginTop: -30,
        marginHorizontal: 20,
    },

    iconSwitch: {
        fontSize: 30,
        color: "#246bfd",
        alignItems: "stretch",
        marginRight: 210,
        marginTop: 10,
    },
});