import React from 'react';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Background,
  Container,
  Product,
  ProductBody,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  Footer,
  Amount,
  InputAmount,
  Subtotal,
  Btn,
  Total,
  TotalText,
  TotalPrice,
  FinalButton,
  FinalText
} from './styles';

class Cart extends React.Component {

  renderProduct = () => {
    return(
      <Product>
        <ProductBody>
          <ProductImage source={{
              uri:
                'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_detalhe1.jpg?ts=1571078789?ims=280x280',
            }}/>
          <ProductInfo>
            <ProductName>Tenis Legal</ProductName>
            <ProductPrice>R$ 20,00</ProductPrice>
          </ProductInfo>
        </ProductBody>
        <Footer>
          <Amount>
            <Btn onPress={()=>{}}>
              <Icon name='remove-circle-outline'  size={20} color="#7159c1"/>
            </Btn>
            <InputAmount>3</InputAmount>
            <Btn onPress={()=>{}}>
              <Icon name='add-circle-outline'  size={20} color="#7159c1"/>
            </Btn>
          </Amount>
          <Subtotal>R$ 60,00</Subtotal>
        </Footer>
      </Product>
    )
  }
  render(){
    return (
    <Background>
      <Container>
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
          renderItem={this.renderProduct}
        />

        <Total>
          <TotalText>TOTAL</TotalText>
          <TotalPrice>R$ 1999,99</TotalPrice>
        </Total>

        <FinalButton>
          <FinalText>FINALIZAR PEDIDO</FinalText>
        </FinalButton>
      </Container>
    </Background>
  );
  }

};

export default Cart;
