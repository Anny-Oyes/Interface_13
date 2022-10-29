import { StyleSheet, Text, View } from 'react-native';

export default function Description() {
    return (

        <View style={styles.subContainer}>
            <Text style={styles.FirstText}>Description (Optional)</Text>

            <View style={styles.containerStart}>
                <Text style={styles.textEntry}>Description</Text>
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
        flexDirection: "column",
        marginLeft: -10,
    },

    textEntry: {
        fontSize: 15,
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 4,
        paddingHorizontal: 25,
        color: "#818080",
    },
});