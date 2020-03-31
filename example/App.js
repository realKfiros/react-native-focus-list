import React, { Component } from 'react';
import { View,} from 'react-native';
import { Container, Header, Left, Right, Title, Content, Button, Text, H1 } from 'native-base';
import styled from 'styled-components';
import FocusList from 'react-native-focus-list';
import { Ionicons } from '@expo/vector-icons';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Title>
              FocusList example
            </Title>
          </Left>
          <Right />
        </Header>
        <Content>
          <H1>Regular Focus List</H1>
          <FocusList
            ref={list => this.regularListRef = list} 
            dataArray={[1, 2, 3, 4, 5]}
            marginFirst={20}/>
          <View style={{ flexDirection: 'row' }}>
            <InlineButton onPress={() => this.regularListRef.moveBack()}>
              <Text>Move back</Text>
            </InlineButton>
            <InlineButton onPress={() => this.regularListRef.moveForward()}>
              <Text>Move forward</Text>
            </InlineButton>
          </View>

          <H1>List with big numbers</H1>
          <FocusList
            ref={list => this.bigNumbersListRef = list} 
            dataArray={[100000001, 200000002, 300000003, 400000004, 500000005]}/>
          <View style={{ flexDirection: 'row' }}>
            <InlineButton onPress={() => this.bigNumbersListRef.moveBack()}>
              <Text>Move back</Text>
            </InlineButton>
            <InlineButton onPress={() => this.bigNumbersListRef.moveForward()}>
              <Text>Move forward</Text>
            </InlineButton>
          </View>

          <H1>List with icons - custom wrapper example</H1>
          <FocusList
                ref={list => this.iconsListRef = list} 
                dataArray={[{
                    name: 'logo-android',
                    color: 'green'
                }, {
                    name: 'logo-apple',
                    color: 'blue'
                }, {
                    name: 'logo-tux',
                    color: 'red'
                }]}
                itemComponent={IconListItem}/>
          <View style={{ flexDirection: 'row' }}>
            <InlineButton onPress={() => this.iconsListRef.moveBack()}>
              <Text>Move back</Text>
            </InlineButton>
            <InlineButton onPress={() => this.iconsListRef.moveForward()}>
              <Text>Move forward</Text>
            </InlineButton>
          </View>

        </Content>
      </Container>
    );
  }
}

class IconListItem extends Component {
  render() {
    const IconView = this.props.focus ? IconViewFocused : IconViewNotFocused;
    return <IconView name={this.props.data.name} color={this.props.data.color}/>;
  }
}

const IconViewFocused = (props) => <Ionicons name={props.name} color={props.color || 'black'} size={35} style={{ margin: 5 }}/>;
const IconViewNotFocused = (props) => <Ionicons name={props.name} color='grey' size={27} style={{ margin: 5 }}/>;

const InlineButton = styled(Button)`
  margin: 10px;
`;