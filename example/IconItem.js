import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

class IconItem extends Component {
  render() {
    const ParentView = this.props.focus ? ParentViewFocused : ParentViewNotFocused;
    const IconView = this.props.focus ? IconViewFocused : IconViewNotFocused;
    const TextView = this.props.focus ? TextViewFocused : TextViewNotFocused;

    return (
      <ParentView data={this.props.data}>
        <IconView data={this.props.data} />
        <TextView data={this.props.data}>
          {this.props.data.text}
        </TextView>
      </ParentView>
    )
  }
}

const ParentViewFocused = styled(View)`
  border: 1px solid ${props => props.data.color || 'black'};
  padding: 10px;
  margin: 5px;
  text-align: center
`;

const ParentViewNotFocused = styled(View)`
  border: 1px solid grey;
  margin: 5px;
  padding: 5px;
  text-align: center;
`;

const IconViewFocused = (props) => <CenterIonicons name={props.data.name} color={props.data.color || 'black'} size={40} style={{ margin: 'auto' }}/>;
const IconViewNotFocused = (props) => <CenterIonicons name={props.data.name} color='grey' size={27} style={{ margin: 'auto' }}/>;

const CenterIonicons = styled(Ionicons)`
    margin: auto;
`

const TextViewFocused = styled(Text)`
  color: ${props => props.data.color || 'black'};
  font-size: 15px;
`;

const TextViewNotFocused = styled(Text)`
  color: grey;
`;

export default IconItem;