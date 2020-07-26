/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { FlatList } from 'react-native';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  List,
  ListItem,
  Photo,
  Title,
  Price,
  ButtonAmount,
  AddButton,
  ButtonText,
} from './styles';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  function renderProduct({ item }) {
    return (
      <ListItem key={item.id}>
        <Photo source={{ uri: item.image }} />
        <Title>{item.title}</Title>
        <Price>{item.priceFormatted}</Price>
        <AddButton
          onPress={() => dispatch(CartActions.addToCartRequest(item.id))}>
          <ButtonAmount>{amount[item.id] || 0}</ButtonAmount>
          <ButtonText>ADICIONAR</ButtonText>
        </AddButton>
      </ListItem>
    );
  }

  renderProduct.propTypes = {
    item: PropTypes.shape().isRequired,
  };

  return (
    <Container>
      <List>
        <FlatList
          horizontal
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderProduct}
        />
      </List>
    </Container>
  );
}

export default Home;
