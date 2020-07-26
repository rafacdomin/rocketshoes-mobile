import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, HomeButton, CartButton, ItemCount } from './styles';

const Header = ({ navigation }) => {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Container>
      <HomeButton onPress={() => navigation.navigate('Home')}>
        <Logo />
      </HomeButton>

      <CartButton onPress={() => navigation.navigate('Cart')}>
        <ItemCount>{cartSize}</ItemCount>
        <Icon name="shopping-cart" size={20} color="#FFF" />
      </CartButton>
    </Container>
  );
};

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Header;
