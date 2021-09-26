import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    Container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        height: 320,
        backgroundColor: 'blue'
    },

    ButtonAddCarrinho: {
        backgroundColor: '#e9ecef',
        marginBottom: 70,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 60,
        borderRadius: 10,
        color: 'orange',
    },
    ContainerButtons: {
        flexDirection: 'row', 
        width: 400,
        height: 80,
        marginTop: 40,
        bottom: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        position: 'absolute'
    },
    ButtonAddProduct: {
        backgroundColor: '#e9ecef',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        width: 140,
        height: 50,
        borderRadius: 10,

    },

    ButtonFinishPedido: {
        backgroundColor: '#006d77',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        width: 200,
        height: 50,
        borderRadius: 10,
    },

    Title: {
        fontSize: 16,
        color: 'orange',
        margin: 3,
    }


});

export default styles;