/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
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
  FinalText,
  RemoveButton,
} from './styles';

import { formatPrice } from '../../util/format';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function incrementAmount(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrementAmount(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  function renderProduct({ item }) {
    return (
      <Product>
        <ProductBody>
          <ProductImage
            source={{
              uri: item.image,
            }}
          />
          <ProductInfo>
            <ProductName>{item.title}</ProductName>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
          </ProductInfo>
          <RemoveButton onPress={() => removeFromCart(item.id)}>
            <Icon name="delete" size={20} color="#7259c1" />
          </RemoveButton>
        </ProductBody>
        <Footer>
          <Amount>
            <Btn
              onPress={() => {
                decrementAmount(item);
              }}>
              <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            </Btn>
            <InputAmount>{item.amount}</InputAmount>
            <Btn
              onPress={() => {
                incrementAmount(item);
              }}>
              <Icon name="add-circle-outline" size={20} color="#7159c1" />
            </Btn>
          </Amount>
          <Subtotal>{item.subtotal}</Subtotal>
        </Footer>
      </Product>
    );
  }

  return (
    <Background>
      <Container>
        <FlatList
          data={cart}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderProduct}
        />

        <Total>
          <TotalText>TOTAL</TotalText>
          <TotalPrice>{total}</TotalPrice>
        </Total>

        <FinalButton>
          <FinalText>FINALIZAR PEDIDO</FinalText>
        </FinalButton>
      </Container>
    </Background>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
