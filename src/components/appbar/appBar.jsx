import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from 'react';
import { Image, StyleSheet, View } from "react-native";
import {Appbar, useTheme} from "react-native-paper"
import { useSafeAreaInsets } from "react-native-safe-area-context";
export const AppHeader = ({navigation,back}) => {
        

        return (
                <>
                <Appbar.Header style={[
                 styles.top,
                ]}
                >
                {back ? <Appbar.BackAction onPress={navigation.goBack} color="white" /> : <Appbar.Action icon="menu" color="white" onPress={() => {}} />}
                
                <Appbar.Content title="Test" color="white"/>
                <Appbar.Action icon="dots-vertical" color="white" onPress={() => {}} />
                </Appbar.Header>
                </>
                
          
        );
      };

      const styles = StyleSheet.create({
        top: {
          backgroundColor: '#A857CB',
        }
      });