import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Item from './components/Item';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * A React Native component that gets a list and highlights a selected item and shows the items that are near.
 * 
 * @version 1.1
 * @author [Kfir Nevo](https://github.com/realKfiros)
 */
class FocusList extends Component {
  state = {
    focus: 0
  };

  componentDidMount() {
    this.setState({
      focus: this.props.startNumber
    });
  }

  /**
   * The custom array that the component uses after converting the dataArray from props
   * 
   * @public
   */
  getDataArray = () => {
    return this.props.dataArray.map((item) => ({
      index: this.props.dataArray.indexOf(item),
      data: item
    }));
  }

  /**
   * The current 2/3 elements shown
   * 
   * @public
   */
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

  /**
   * Move forward in the display
   * 
   * @public
   */
  moveForward = () => {
    if (this.state.focus !== this.props.dataArray.length - 1) {
      this.setState({
        focus: this.state.focus + 1
      });
    }
  }

  /**
   * Move backward in the display
   * 
   * @public
   */
  moveBack = () => {
    if (this.state.focus !== 0) {
      this.setState({
        focus: this.state.focus - 1
      });
    }
  }

  /**
   * The focused item
   * 
   * @public
   */
  get focused(){
    return this.getDataArray().find((item) => item.index === this.state.focus);
  }

  render() {
    const ItemComponent = this.props.itemComponent;
    const List = this.state.focus === 0 ? FirstItemFlatList : CenteredFlatList;
    return (
      <List
        marginFirst={this.props.marginFirst}
        horizontal={true}
        data={this.getCurrentFocus()}
        renderItem={({item}) => <ItemComponent data={item.data} focus={item.index === this.state.focus}/>}/>
    )
  }
}

/**
 * The same horizontal flat list but centered horizontally
 * 
 * @ignore
 */
const CenteredFlatList = styled(FlatList)`
  flex-grow: 1;
  justify-content: center;
`;

/**
 * Margin for the first item
 * 
 * @ignore
 */
const FirstItemFlatList = styled(FlatList)`
  margin-left: ${props => props.marginFirst}px;
  flex-grow: 1;
  justify-content: center;
`;

FocusList.propTypes = {
  /** The data array */
  dataArray: PropTypes.array.isRequired,
  /** Custom wrapper component for list item */
  itemComponent: PropTypes.elementType,
  /** Margin for the first item in the array */
  marginFirst: PropTypes.number,
  /** The initial index that will be highlighted */
  startNumber: PropTypes.number
}

FocusList.defaultProps = {
  itemComponent: Item,
  marginFirst: 0,
  startNumber: 0
}

export default FocusList;