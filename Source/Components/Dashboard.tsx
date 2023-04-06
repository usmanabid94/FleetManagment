/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef,useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Icon } from "react-native-elements";
import { TextInput } from 'react-native-paper';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';


const Dashboard = (props: { navigation: { openDrawer: () => void; }; }) => {
  const [data, setData] = useState([]);
  const [fields, setFields] = useState([]);

  const [text, setText] = useState('');
  const [textFieldTitle, setTextFieldTitle] = useState([])
  const [childTextFieldTitle, setChildTextFieldTitle] = useState([])

  const [views, setViews] = useState([]);

  const [visible, setVisible] = useState(false);
  let menuRef = useRef(null);
  var infofull  = { }
  const showMenu = () => {
    setVisible(true);
    menuRef.current.show();
  };

  const hideMenu = () => {
    setVisible(false);
    menuRef.current.hide();
  };
  const addView = () => {
    setViews([...views, []]);
  };
  // const addText = (viewIndex) => {
  //   console.log('viewIndex',viewIndex)
  //   const updatedViews = [...views];
  //   updatedViews[viewIndex] = [...updatedViews[viewIndex], <Text key={Math.random()} onPress={() => addText(viewIndex)} style={{margin: 5}}>new field</Text>];
  //   // updatedViews[viewIndex] = [...updatedViews[viewIndex], itemType];

  //   setViews(updatedViews);
  // };
  const addText = (viewIndex) => {
    const updatedViews = [...views];
    updatedViews[viewIndex] = [    ...updatedViews[viewIndex],
      <Text key={Math.random()} onPress={() => addText(viewIndex)} style={{margin: 5}}>New Text</Text>
    ];
    setViews(updatedViews);
  };
  
  function handleClick() {
    const newId = data.length + 1;
    const newItem = { id: newId, count: 1 };
    setData([...data, newItem]);
  }
  
  const handleFieldsClick = (parentId, childId) => {
    const newId = fields.length + 1;
    const newItem = { id: newId, parentId, childId };
    setFields([...fields, newItem]);
  };
  function onChangeText(newText: string) {
    setText(newText);
  }
  const handleSimpleTextField = (text: string, index: number) => {
    console.log("text", text)
    console.log("index", index)
    var itemData = []
    itemData[index] = text
    infofull[index]  = {...textFieldTitle}
    // InfoAdPostOBJ[data.field_type_name] = { ...itemData }

    setTextFieldTitle({ ...textFieldTitle, ...itemData })
   
}
const handleSimpleChildTextField = (text: string, index: string | number) => {
  console.log("text", text)
  console.log("index", index)
  var itemData = []
  itemData[index] = text
  infofull[index]  = {...childTextFieldTitle}
  setChildTextFieldTitle({ ...childTextFieldTitle, ...itemData })
 
}
  // const handleSimpleTextField = (event, index) => {
  //   setTextFieldTitle((prevTitles) => {
  //     return prevTitles.map((title, i) => {
  //       if (i === index) {
  //         return event;
  //       }
  //       return title;
  //     });
  //   });
  // };
  
  const removeView = (index) => {
    const newViews = [...views];
    newViews.splice(index, 1);
    setViews(newViews);
  };
  const removeChildView = (index) => {
    setViews((prevViews) => {
      const updatedViews = [...prevViews];
      updatedViews.splice(index, 1);
      return updatedViews;
    });
  };
  
  return (
    <View>
      {/* Header start */}
      <View
        style={{
          height: wp(15),
          width: '100%',
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#d8d8d8',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 5,
        }}>
        <View
          style={{
            height: wp(10),
            width: '100%',
            backgroundColor: 'red',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.openDrawer();
            }}
            style={{left: wp(5)}}>
            <Icon
              style={{
                height: wp(7),
                width: wp(7),
                resizeMode: 'contain',
              }}
              color="white"
              name={'menu'}
              type="material"
            />
          </TouchableOpacity>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              alignContent: 'center',
              alignSelf: 'center',
              marginEnd: hp(4),
            }}>
            <Text style={{color: 'white'}}>helo</Text>
          </View>
        </View>
      </View>
      {/* Header end */}
      <ScrollView style={{marginBottom: '30%'}}>
        <Button title="Add View" onPress={addView} />
        {views.map((item, index) => (
          <View style={[styles.card, {flex: 1}]} key={index}>
            <Text style={styles.title}>{textFieldTitle[index]}</Text>
            <View style={{marginTop: hp('1'), flex: 1}}>
              <TextInput
                mode="outlined"
                label={
                  textFieldTitle[index]
                    ? textFieldTitle[index]
                    : 'Type something to change the label'
                }
                // value={text}
                value={textFieldTitle[index]}
                onChangeText={text => {
                  console.log(text), handleSimpleTextField(text, index);
                }}
              />
              {item.map((i, inde) => {
                console.log("mainItem",i)
                // console.log("iteminde",items,inde)
                return (
                  <View
                    style={{
                      marginTop: wp('2'),
                      flexDirection: 'row',
                      borderRadius: 5,
                      borderWidth: hp('0.03'),
                      borderColor: 'grey',
                    }}>
                      
                    <TextInput
                    style={{height: wp('12'), width: wp('58')}}
                      mode="outlined"
                      label={
                        childTextFieldTitle[inde]
                          ? childTextFieldTitle[inde]
                          : 'Type something to change the label'
                      }
                      // value={text}
                      value={childTextFieldTitle[inde]}
                      onChangeText={text => {
                        console.log("BothChilds",text,inde), handleSimpleChildTextField(text, inde);
                      }}
                    />
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'blue'}}>{i}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        height: wp('6'),
                        alignSelf: 'center',
                      }}
                      onPress={()=>console.log("delete val")}>
                      <Icon name="delete" size={wp('6')} type="material" />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                alignSelf: 'center',
                width: wp('40'),
                marginTop: 10,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#fff',
              }}
              onPress={() => console.log('choose title')}>
              <Text style={[styles.submitText]}> Title Field</Text>
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                marginTop: wp('1'),
                flexDirection: 'row',
                flex: 1,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  alignSelf: 'center',
                  flex: 1,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: '#fff',
                }}
                key={index}
                onPress={()=>{
                  addText(index)
                  // showMenu()
                }}>
                <Text style={[styles.submitText]}> Add Field</Text>
                <>
                  <Menu 
                            ref={menuRef}
                            visible={visible} onRequestClose={hideMenu}>
                    <MenuItem
                      onPress={() => {
                        hideMenu(), addText(index,'text');
                      }}>
                      Text
                    </MenuItem>
                    <MenuItem
                      onPress={() => {
                        hideMenu(), addText(index, 'date');
                      }}>
                      Date
                    </MenuItem>
                    <MenuItem
                      onPress={() => {
                        hideMenu(), addText(index, 'checkBox');
                      }}>
                      CheckBox
                    </MenuItem>
                    <MenuItem
                      onPress={() => {
                        hideMenu(), addText(index, 'number');
                      }}>
                      Number
                    </MenuItem>
                  </Menu>
                </>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  alignSelf: 'center',
                  flex: 1,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: '#fff',
                }}
                onPress={() => handleClick()}>
                <Text style={[styles.submitText]}> Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
          // <View key={index} style={{ backgroundColor: 'yellow', margin: 10 }}>
          //   {view.map(text => text)}
          //   <TouchableOpacity onPress={() => addText(index)}>
          //     <Text style={{ margin: 5 }}>Add Text</Text>
          //   </TouchableOpacity>
          // </View>
        ))}
          <Button title="Add View" onPress={()=>console.log("checkData",infofull)} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  submitText: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: '700' },
    submit: { alignSelf: 'center', width: wp('40'), marginTop: 10, paddingTop: 15, paddingBottom: 15, borderRadius: 8, borderWidth: 1, borderColor: '#fff' }
    ,card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      margin: wp('2'),
      padding: wp('2'),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    title: {
      fontSize: wp('5'),
      fontWeight: 'bold',
      marginBottom: wp('0.05'),
    },
    description: {
      fontSize: 16,
    },
  });

export default Dashboard;