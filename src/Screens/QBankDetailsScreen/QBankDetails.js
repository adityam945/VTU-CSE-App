import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function QBankDetails({ route }) {
  const { link } = route.params;
  return (
    <WebView
      source={{
        uri: `https://drive.google.com/viewerng/viewer?embedded=true&url=${link}`,
      }}
      startInLoadingState={true}
    />
  );
}
