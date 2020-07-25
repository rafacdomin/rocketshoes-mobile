import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

import { FlatList } from 'react-native';
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

class Home extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  renderProduct = ({ item }) => {
    const { amount, addToCartRequest } = this.props;

    return (
      <ListItem key={item.id}>
        <Photo source={{ uri: item.image }} />
        <Title>{item.title}</Title>
        <Price>{item.priceFormatted}</Price>
        <AddButton onPress={() => addToCartRequest(item.id)}>
          <ButtonAmount>{amount[item.id] || 0}</ButtonAmount>
          <ButtonText>ADICIONAR</ButtonText>
        </AddButton>
      </ListItem>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <List>
          <FlatList
            horizontal
            data={products}
            keyExtractor={(item) => String(item.id)}
            renderItem={this.renderProduct}
          />
        </List>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
