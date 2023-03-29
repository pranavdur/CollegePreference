import {Text, View, SafeAreaView,StyleSheet, SafeAreaViewBase, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import { collegeAspects } from "./Utils";
import { ListItem } from './ListItem';


import {useContext} from "react";
import {myContext} from "../../App"


/**
 *   const [state, setState] = React.useState<{ selections: string[] }>({ selections: [] });
 */

//Screen One
const GetUserDecisionAspects = (props) => {
  const {optionsMenu, selections, setSelections} = React.useContext(myContext);

    //onPress To Navigate
    const onPress = () => {
      props.navigation.navigate('Next Step');
    };

  function handleCheckboxChange(key: string) {
    let sel = selections
    let find = sel.indexOf(key)

    if (find > -1) {
      sel.splice(find, 1)
    } else {
      sel.push(key)
    }

    setSelections(sel)
  }


function AddCheckbox (aspectName:string) {
  return(
    <View style={styles.item}>
    <CheckBox value={aspectName}
          onValueChange={()=> handleCheckboxChange(aspectName)}
          color="#fc5185"
          lineWidth={2}
          hideBox={false}
          boxType={'square'}
          tintColors={'#9E663C'}
          onCheckColor={'#6F763F'}
          onFillColor={'#4DABEC'}
          onTintColor={'#F4DCF8'}
          animationDuration={0.5}
          disabled={false}
          onAnimationType={'bounce'}
          offAnimationType={'stroke'}
    />
    <Text style={
      {...styles.checkBoxTxt,
        color:[aspectName]?"#fc5185":"gray",
        fontWeight:[aspectName]? "bold" :"normal"
      }}
      > {aspectName} </Text>
    </View>
  );
}

function aspectSelectionPanel() {
  return (
      <React.Fragment>
        {optionsMenu.map((optionItem) => {
          return (
            AddCheckbox(optionItem)
          );
        })}
      </React.Fragment>
  );
};



  return (
    <View style={styles.container}>
      <Text style={styles.header}>Check all that applies to your decision:</Text>
      {aspectSelectionPanel()}
      <TouchableOpacity style={styles.submit} onPress={onPress}>
          <Text style={{color:"white"}}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40
  },
  item:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
  },
  checkBoxTxt:{
    marginLeft:20
  },
  submit:{
    width:"80%",
    backgroundColor:"#fc5185",
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:40
  }
});

export default GetUserDecisionAspects;