import {StyleSheet} from 'react-native'

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 50,
        marginBottom: 30,
        color: '#023e8a'
      },
      textLogin: {
        fontSize: 40,
        marginBottom: 30,
      },
      inputContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        // backgroundColor: 'red',
        marginBottom: 10,
      },
      inputSenha: {
        width: '85%',
        height: 50,
        padding: 8,
      },
      input: {
          borderWidth: 1,
          width: '90%',
          height: 50,
          borderRadius: 10,
          marginBottom: 15,
          padding: 8,
    
      },
      buttonPassword: {
        // backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '15%',

      },
      textSenha: {
        justifyContent: 'flex-start',
        marginBottom: 5,
        marginTop: 5,
        color: '#023e8a'
      },
      button: {
          width: '90%',
          height: 50,
          backgroundColor: 'orange',
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
      },
      texOption: {
          fontSize: 17,
          marginTop: 10,
      }
})

export default styles;