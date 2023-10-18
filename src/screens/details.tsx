import { Linking, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import DropDownList from '../components/dropDownList'
import CustomButton from '../components/button'
import React from 'react'

const getMetrolinkStops = () => {
  return ([
    {key:'1', value:'Piccadilly'},
    {key:'2', value:'Piccadilly Gardens'},
    {key:'3', value:'St Peter\'s Square'},
    {key:'4', value:'Deansgate-Castlefield'},
    {key:'5', value:'Cornbrook'},
  ])
}

const submitStopSelection = async (selectedStop: string) => {
  const websiteURL = "https://tfgm.com/public-transport/tram/stops/"+selectedStop.replace(/\s/g, '-').replace('\'','')+"-tram"
  console.log(websiteURL)
  const validURL = await Linking.canOpenURL(websiteURL);

  if (validURL) {
    await Linking.openURL(websiteURL);
  } else {
    console.log(`Don't know how to open this URL: ${websiteURL}`);
  }
}

const DetailsScreen = () => {
  const [selectedStop, setSelectedStop] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <DropDownList data={getMetrolinkStops()} setSelected={setSelectedStop}/>
      <CustomButton buttonText={"Submit"} onPress={()=>submitStopSelection(selectedStop)}/>
    </View>
  )
}



export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
