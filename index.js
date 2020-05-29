// @ts-nocheck
import React, { Component } from 'react';
import { requireNativeComponent, View, Platform, findNodeHandle } from 'react-native';

var CanvasView = Platform.select({
  ios: requireNativeComponent('RCTGCanvasView'),
  android: requireNativeComponent('GCanvasView')
});

export default class GCanvasView extends Component {
  static propTypes = {
    ...View.propTypes
  };

  render() {
    return (<CanvasView {...this.props} />);
  };
}
