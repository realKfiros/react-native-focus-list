import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Item from './components/Item';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class FocusList extends Component {
  state = {
    focus: 0
  };

  getDataArray = () => {
    return this.props.dataArray.map((item) => ({
      index: this.props.dataArray.indexOf(item),
      data: item
    }));
  }

  getCurrentFocus = () => {
    const dataArray = this.getDataArray();
    if (this.state.focus === 0) {
      return [dataArray[0], dataArray[1]];
    } else if (this.state.focus === dataArray.length - 1) {
      return [dataArray[dataArray.length - 2], dataArray[dataArray.length - 1]];
    } else {
      return [dataArray[this.state.focus - 1], dataArray[this.state.focus], dataArray[this.state.focus + 1]];
    }
  }

  moveForward = () => {
    if (this.state.focus !== this.props.dataArray.length - 1) {
      this.setState({
        focus: this.state.focus + 1
      });
    }
  }

  moveBack = () => {
    if (this.state.focus !== 0) {
      this.setState({
        focus: this.state.focus - 1
      });
    }
  }

  get focused(){
    return this.getDataArray().find((item) => item.index === this.state.focus);
  }

  render() {
    const ItemComponent = this.props.itemComponent;
    const List = this.state.focus === 0 ? FirstItemFlatList : FlatList;
    return (
      <List
        marginFirst={this.props.marginFirst}
        horizontal={true}
        data={this.getCurrentFocus()}
        renderItem={({item}) => <ItemComponent data={item.data} focus={item.index === this.state.focus}/>}/>
    )
  }
}

const FirstItemFlatList = styled(FlatList)`
  margin-left: ${props => props.marginFirst}px;
`

FocusList.propTypes = {
  dataArray: PropTypes.array.isRequired,
  itemComponent: PropTypes.elementType,
  marginFirst: PropTypes.number
}

FocusList.defaultProps = {
  itemComponent: Item,
  marginFirst: 0
}

export default FocusList;