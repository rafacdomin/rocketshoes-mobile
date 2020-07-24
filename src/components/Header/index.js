import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, HomeButton, CartButton, ItemCount } from './styles';

const Header = ({ navigation }) => {
  return (
    <Container>
      <HomeButton onPress={() => navigation.navigate('Home')}>
        <Logo />
      </HomeButton>

      <CartButton onPress={() => navigation.navigate('Cart')}>
        <ItemCount>3</ItemCount>
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
