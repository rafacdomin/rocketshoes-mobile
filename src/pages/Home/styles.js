import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #141419;
  padding: 20px 0 0 20px;
  flex: 1;
`;

export const List = styled.View``;

export const ListItem = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin-right: 15px;
  width: 220px;
`;

export const Photo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  color: #333;
  font-size: 16px;
  line-height: 21px;
`;

export const Price = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 21px;
  margin-top: 5px;
`;

export const AddButton = styled(RectButton)`
  flex-direction: row;
  background: #7159c1;
  border-radius: 4px;
  margin-top: 14px;
`;

export const ButtonAmount = styled.Text`
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
  padding: 13px 13px 13px 33px;
  font-size: 14px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  padding: 13px 36px;
  font-size: 14px;
  font-weight: bold;
`;
