# react-native-focus-list
[![npm version](https://badge.fury.io/js/react-native-focus-list.svg)](https://badge.fury.io/js/react-native-focus-list)
[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat&logo=EXPO&labelColor=ffffff&logoColor=000)](https://exp.host/@realkfiros/focus-list-example)

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
|**`itemComponent`**|`element`|`Item` from Item.js|Custom wrapper component for list item|
|**`startNumber`**|`number`| 0 |The initial index that will be highlighted|

## Methods

| Name | Description |
|---|---|
| moveForward() | Moves forward in the lst |
| moveBack() | Moves backward in the list |

### Full demo

[![run in expo snack](https://img.shields.io/badge/SNACK-TRY%20NOW-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=FFF)](https://snack.expo.io/@realkfiros/react-native-focus-list-example)