import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

class Item extends Component {
  render() {
    const ItemView = this.props.focus ? ItemViewFocused : ItemViewNotFocused;
    const TextView = this.props.focus ? TextFocused : TextNotFocused;
    return (
      <ItemView>
        <TextView>{this.props.data}</TextView>
      </ItemView>
    );
  }
}

const ItemViewFocused = styled(View)`
  padding: 5px;
  border: 1px solid black;
  margin: 5px;
  justify-content: center;
`;

const ItemViewNotFocused = styled(ItemViewFocused)`
  border: 1px solid grey;
  color: grey;
  text-align: center;
`;

const TextFocused = styled(Text)`
  font-size: 25px
`;

const TextNotFocused = styled(Text)`
  color: grey;
`

export default Item;