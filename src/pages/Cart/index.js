/* eslint-disable react/prop-types */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

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

function Cart() {
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.amount * product.price),
    }))
  );

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function incrementAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrementAmount(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
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
          <RemoveButton
            onPress={() => dispatch(CartActions.removeFromCart(item.id))}>
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

export default Cart;
