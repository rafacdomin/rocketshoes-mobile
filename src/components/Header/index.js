import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, HomeButton, CartButton, ItemCount } from './styles';

const Header = ({ navigation, cartSize }) => {
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
  cartSize: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
