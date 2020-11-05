import React from 'react'
import {View} from 'react-native'
import { QRCode } from 'react-native-custom-qr-codes-expo';

function QRScreen() {
  return (
    <View>
      <QRCode content='https://reactnative.com'/>
    </View>
  )
}

export default QRScreen

