import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  background: #141419;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const HomeButton = styled(RectButton)`
  width: 185px;
  height: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 2;
`;

export const CartButton = styled(RectButton)`
  height: 24px;
  width: 24px;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 1;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
