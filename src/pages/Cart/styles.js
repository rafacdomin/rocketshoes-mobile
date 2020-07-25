import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Background = styled.View`
  background: #141419;
  flex: 1;
  padding: 20px 20px 90px;
`;

export const Container = styled.View`
  background: #f2f2f2;
  border-radius: 4px;
  padding: 22px 15px 10px;
  max-height: 550px;
`;

export const Product = styled.View`
  background: #fff;
`;

export const ProductBody = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductInfo = styled.View`
  margin-left: 10px;
  max-width: 200px;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  color: #333;
  line-height: 18px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const Footer = styled.View`
  background: #ddd;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Btn = styled(RectButton)``;

export const RemoveButton = styled(RectButton)``;

export const InputAmount = styled.Text`
  background: #f2f2f2;
  border-radius: 4px;
  border: 1px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
  width: 50px;
  font-size: 14px;
  margin: 0px 5px;
`;

export const Subtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Total = styled.View`
  align-items: center;
  margin: 30px;
`;

export const TotalText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #999;
`;

export const TotalPrice = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #000;
  margin-top: 5px;
`;

export const FinalButton = styled(RectButton)`
  background: #7159c1;
  align-items: center;
  justify-content: center;
  padding: 13px;
  border-radius: 4px;
`;

export const FinalText = styled.Text`
  color: #f2f2f2;
  font-weight: bold;
  font-size: 14px;
`;
