import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Botton() {
    return (

        <View style={styles.subContainer}>

            <TouchableOpacity style={styles.containerStart}>
                <Text style={styles.textSave}>Save</Text>
            </TouchableOpacity>

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
        marginTop: 10,
    },

    FirstText: {
        marginVertical: 15,
    },

    containerStart: {
        marginHorizontal: 40,
        backgroundColor: "#2c71fe",
        width: "103%",
        height: 50,
        borderRadius: 30,
        flexDirection: "column",
        marginLeft: -10,
    },

    textSave: {
        fontSize: 15,
        fontWeight: "bold",
        borderRadius: 10,
        paddingVertical: 10,
        marginTop: 3,
        marginLeft: 150,
        color: "#ffffff",
    },
});