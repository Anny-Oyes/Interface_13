import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function AddMedia() {
    return (

        <View style={styles.subContainer}>
            <Text style={styles.FirstText}>Add Media (Optional)</Text>

            <View style={styles.containerStart}>
                <FontAwesome5 name="file-upload" style={styles.iconUpload} />
                <Text style={styles.textEntry}>Browser File</Text>
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

    FirstText: {
        marginVertical: 15,
    },

    containerStart: {
        marginHorizontal: 40,
        backgroundColor: "#fafafa",
        width: "103%",
        height: 250,
        borderRadius: 15,
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: "#e0e0e0",
        flexDirection: "column",
        marginLeft: -10,
    },

    textEntry: {
        fontSize: 15,
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 4,
        marginLeft: 117,
        color: "#818080",
    },

    iconUpload: {
        fontSize: 30,
        alignSelf: "center",
        marginTop: 100,
        color: "#2c71fe"
    },
});