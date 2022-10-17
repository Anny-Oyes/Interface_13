import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function EntryDate() {
    return (

        <View style={styles.subContainer}>
            <Text style={styles.FirstText}>Educational Attainment</Text>
            <View style={styles.containerStart}>
                <Text style={styles.textEntry}>Completed Master's Degree</Text>
                <AntDesign name="caretdown" style={styles.iconCaretdown} />
            </View>

            <Text style={styles.FirstText}>Course</Text>
            <View style={styles.containerStart}>
                <Text style={styles.textEntry}>Computer Science</Text>
            </View>

            <Text style={styles.FirstText}>School</Text>
            <View style={styles.containerStart}>
                <Text style={styles.textEntry}>Harvard University</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    subContainer: {
        flexDirection: "column",
        marginHorizontal: 30,
        marginVertical: 40,
        marginTop: -20,
    },

    FirstText: {
        marginVertical: 15,

    },

    containerStart: {
        marginHorizontal: 40,
        backgroundColor: "#fafafa",
        Color: "#212121",
        width: "103%",
        height: 50,
        borderRadius: 15,
        flexDirection: "column",
        marginLeft: -10,
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
});