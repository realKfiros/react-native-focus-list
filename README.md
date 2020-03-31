# react-native-focus-list
[![npm version](https://badge.fury.io/js/react-native-focus-list.svg)](https://badge.fury.io/js/react-native-focus-list)

A React Native component that gets a list and highlights a selected item and shows the items that are near.

## Installation

```
npm install --save react-native-focus-list
```

## Usage

```js
import React, { Component } from 'react';
import FocusList from 'react-native-focus-list';

export default class App extends Component {
    render() {
        return <FocusList dataArray={[1, 2, 3, 4, 5]} marginFirst={20}/>
    }
}
```

## Properties

| Name | Type | Default | Description |
|---|---|---|---|
|**`dataArray`**|`array<any>`| **REQUIRED** |The data array|
|**`marginFirst`**|`number`| 20 |Margin for the first item in the array|
|**`itemComponent`**|`element`|<Item> from Item.js|Custom wrapper component for list item|

## Methods

| Name | Description |
|---|---|
| moveForward() | Moves forward in the lst |
| moveBack() | Moves backward in the list |

### example of usage with a wrapper

```js
import React, { Component } from 'react';
import FocusList from 'react-native-focus-list';
import { Ionicons } from '@expo/vector-icons';

export default class App extends Component {
    render() {
        return (
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
        )
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
```