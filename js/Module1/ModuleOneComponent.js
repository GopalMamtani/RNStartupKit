import React, { useState } from "react";
import { Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { View, Button, FlatList, TextInput } from "react-native";
import * as AgeActionCreators from "./ModuleOneActions";
import CustomText from "../../CommonComponents/CustomText";
import yelp from '../Api/AxiosApiKit';

export default function ModuleOneComponent({ navigation }) {
  const dispatch = useDispatch();
  const arr = [
    {
      name: "Patrick star",
    },
    {
      name: "Gallileo",
    },
    {
      name: "Einsten",
    },
    {
      name: "Peterson",
    },
    {
      name: "Schwarzenneger",
    },
    {
      name: "Dostoyevsky",
    },
  ];
  const [name, setName] = useState("");
  const [results,setResults]= useState([]);
  const searchApi = async() =>{ 
    try{
   const response = await yelp.get('/users');
   setResults(response.data);
    }
    catch(err){
      alert('try again later api phat gyi');
    }
  }
  return (
    <View>
      <Button
        onPress={() => dispatch(AgeActionCreators.ageIncrement())}
        title="++++++++"
        color="red"
      />
      <Text
        style={{
          textAlign: "center",
        }}
      >
        Hello {useSelector((state) => state.main.age)}
      </Text>
      <Button
        onPress={() => dispatch(AgeActionCreators.ageDecrement())}
        title="-----------"
        color="red"
      />
      <Button
        title="Take Me to screen 2"
        onPress={() =>
          navigation.navigate("Module2", {
            key: "passing this object from scrren one as route param",
          })
        }
        color="green"
      />
      <CustomText onPress={this.onPress} title="CustomTitle" />
      <FlatList
        data={arr}
        renderItem={({ item }) => <Text> {item.name} </Text>}
      />
      <TextInput
        style={{
          margin: 15,
          borderColor: "black",
          borderWidth: 1,
        }}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        onEndEditing={(newValue)=>{searchApi(newValue)}}
      />
      <Text> my name is {name} </Text>
      <Text> Data we got from api is {JSON.stringify(results)} </Text>
    </View>
  );
}
