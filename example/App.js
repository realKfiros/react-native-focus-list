import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Right, Title, Content, Button, Text, H1 } from 'native-base';
import styled from 'styled-components';
import FocusList from 'react-native-focus-list';
import IconItem from './IconItem';

console.disableYellowBox = true;

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

          <H1>List with icons and text</H1>
          <FocusList
            ref={list => this.advancedListRef = list} 
            dataArray={[{
              name: 'logo-android',
              color: 'green',
              text: 'Android'
            }, {
              name: 'logo-apple',
              color: 'blue',
              text: 'iOS'
            }, {
              name: 'logo-tux',
              color: 'red',
              text: 'Linux'
            }]}
            itemComponent={IconItem}/>
          <View style={{ flexDirection: 'row' }}>
            <InlineButton onPress={() => this.advancedListRef.moveBack()}>
              <Text>Move back</Text>
            </InlineButton>
            <InlineButton onPress={() => this.advancedListRef.moveForward()}>
              <Text>Move forward</Text>
            </InlineButton>
          </View>

        </Content>
      </Container>
    );
  }
}

const InlineButton = styled(Button)`
  margin: 10px;
`;