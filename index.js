import React, { Component } from 'react';
import { View } from 'react-native';
import Item from './components/Item';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * A React Native component that gets a list and highlights a selected item and shows the items that are near.
 * 
 * @version 1.2.3
 * @author [Kfir Nevo](https://github.com/realKfiros)
 */
class FocusList extends Component {
  componentDidMount() {
    this.initializeFocus();
  }

  /**
   * Initializes the focus on the list
   */
  initializeFocus() {
    if (this.props.startNumber) {
      this.setState({
        focus: this.props.startNumber
      });
    } else {
      this.setState({
        focus: 0
      });
    }
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
    if (this.state && (this.state.focus !== null)) {
      const ItemComponent = this.props.itemComponent;
      const arr = this.getCurrentFocus();
      const First = this.state.focus === 0 ? null : <ItemComponent data={arr[0].data} focus={false} />
      const Second = this.state.focus === 0 ? <ItemComponent data={arr[0].data} focus={true} /> : <ItemComponent data={arr[1].data} focus={true} />
      const Third = this.state.focus === this.props.dataArray.length - 1 ? null : (
        this.state.focus === 0 ? <ItemComponent data={arr[1].data} focus={false} /> : <ItemComponent data={arr[2].data} focus={false} />
      );
      return (
        <ListView>
          {First}
          {Second}
          {Third}
        </ListView>
      );
    } else {
      return null
    }
  }
}

/**
 * The "list" view
 * 
 * @ignore
 */
const ListView = styled(View)`
  flex-direction: row;
  justify-content: center;
  text-align: center;
`

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