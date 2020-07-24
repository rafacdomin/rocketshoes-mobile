import React from 'react';
import { FlatList } from 'react-native';

import { Container, List, ListItem, Photo, Title, Price, ButtonAmount, AddButton, ButtonText } from './styles';

class Home extends React.Component {
  state = {
    products: [],
  };

  renderProduct = () => {
    return (
      <ListItem>
        <Photo
          source={{
            uri:
              'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_detalhe1.jpg?ts=1571078789?ims=280x280',
          }}
        />
        <Title>Tenis Legal</Title>
        <Price>R$20,00</Price>
        <AddButton>
          <ButtonAmount>1</ButtonAmount>
          <ButtonText>ADICIONAR</ButtonText>
        </AddButton>
      </ListItem>
    );
  };

  render(){
    return (
      <Container>
        <List>
        <FlatList
          horizontal
          data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
          renderItem={this.renderProduct}
        />
        </List>
      </Container>
    )
  }
};

export default Home;
