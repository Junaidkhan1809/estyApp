import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';



function ProfileLogo()  {
  return(
    <View>
      Added manually
    <View style={styles.view}>
  <Avatar.Image size={80} source={require('../assets/Profile.png')} />
  </View>
  </View>
  )}

const styles = StyleSheet.create({
  view:{
    
  }
})

export default ProfileLogo;