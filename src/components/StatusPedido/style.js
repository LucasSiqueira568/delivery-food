import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        height: '100%',
        width: Dimensions.get("window").width,
        position: 'absolute',
    }
})

export default styles;