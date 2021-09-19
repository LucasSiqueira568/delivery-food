import styled from 'styled-components/native'


export const Container = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const ButtonAddCarrinho = styled.TouchableOpacity`
    background-color: #e9ecef;
    margin-bottom: 10;
    margin-top: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 60px;
    border-radius: 10px;
    color: orange;

`

export const ButtonAddProduct = styled.View`
    background-color: #e9ecef;
    margin-bottom: 10;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    width: 140px;
    height: 60px;
    border-radius: 10px;
` 

export const ButtonFinishPedido = styled.View`
    background-color: #006d77;
    margin-bottom: 10;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    width: 200px;
    height: 60px;
    border-radius: 10px;


`

export const Title = styled.Text`
    font-size: 16px;
    color: orange;
    margin: 3px;

`