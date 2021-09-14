import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    cardContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardProduct: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom: 10,
        width: 200,
        height: 230,
        borderRadius: 10,
        marginLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        width: 190,
        height: 120,
        borderRadius: 10,
    },
    priceContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonCard: {
        backgroundColor: "#000",
        width: 30,
        height: 30,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    }
})

export default styles;