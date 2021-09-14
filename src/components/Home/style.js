import {StyleSheet} from 'react-native'

 const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    title: {
        justifyContent: 'space-between',
        marginTop: 40,
        // marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    search: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 30,
        marginTop: 30,
        marginLeft: 15,
        backgroundColor: '#FFF'
    },
    input: {
        width: '80%',
        height: 50,
        padding: 2,
    },
    searchButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '10%',
    },
    barsButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '10%',
    }
})

export default styles;