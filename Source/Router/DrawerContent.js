/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {Divider} from 'react-native-paper';

import {Avatar, Title, Drawer} from 'react-native-paper';
import {ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerContent = props => {
//   useEffect(() => {
//     userData();
//   }, [props]);
//   const userData = async () => {
//     const drawerItems = await AsyncStorage.getItem('drawerItems');
//     console.log('drawerItems', drawerItems);
//   };
  return (
    <View style={{flex: 1}}>
      <ScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={{backgroundColor: 'red'}}>
            <View
              style={{
                flexDirection: 'column',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <Avatar.Image
                source={{
                  uri: 'https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                }}
                size={120}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 10,
              }}>
              <Title style={styles.title}>Fleet Managment</Title>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="DashBoard"
              onPress={() => {
                props.navigation.navigate('dashboard');
              }}
            />
            <Divider />
            <DrawerItem
              label="DashBoard2"
              onPress={() => {
                props.navigation.navigate('dashboard');
              }}
            />
            <Divider />
            <DrawerItem
              label="DashBoard3"
              onPress={() => {
                props.navigation.navigate('dashboard');
              }}
            />
          </Drawer.Section>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'white',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'white',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerContent;
