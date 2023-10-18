import { Linking, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import DropDownList from '../components/dropDownList'
import CustomButton from '../components/button'
import React from 'react'
import axios from 'axios'

const getMetrolinkStops = () => {
  return ([
    {key:'1', value:'Cornbrook'},
    {key:'2', value:'Cornbrook'},
    {key:'3', value:'Cornbrook'},
    {key:'4', value:'Cornbrook'},
    {key:'5', value:'Cornbrook'},
  ])
}

const goToStopWebpage = async (stop: string) => {
  const websiteURL = "https://tfgm.com/public-transport/tram/stops/"+stop.replace(/\s/g, '-').replace('\'','')+"-tram"
  console.log(websiteURL)
  const validURL = await Linking.canOpenURL(websiteURL);

  if (validURL) {
    await Linking.openURL(websiteURL);
  } else {
    console.error(`Invalid URL: ${websiteURL}`);
  }
}

const makeGetRequest = async () => {
  const response = await axios({
    method: 'get',
    url: 'https://api.tfgm.com/odata/Metrolinks?',
    headers: {"Ocp-Apim-Subscription-Key": '695237a1c5044581802bbcbe83adb0b7'}
  })

  const cornbrookScreen = response.data.value.filter(function(tram: any) {return tram.AtcoCode='9400ZZMACRN' && tram.Direction=='Incoming'})[0]
  console.log(cornbrookScreen)
  const departures = mapDepartures(cornbrookScreen)
  console.log(departures)
};

const mapDepartures = (departureObject: any) => (
  [
    {id: '01', destination: departureObject.Dest0, status: departureObject.Status0, wait: departureObject.Wait0},
    {id: '02', destination: departureObject.Dest1, status: departureObject.Status1, wait: departureObject.Wait1},
    {id: '03', destination: departureObject.Dest2, status: departureObject.Status2, wait: departureObject.Wait2},
    {id: '04', destination: departureObject.Dest3, status: departureObject.Status3, wait: departureObject.Wait3}
  ]
)

const DetailsScreen = () => {
  const [selectedStop, setSelectedStop] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <DropDownList data={getMetrolinkStops()} setSelected={setSelectedStop}/>
      <CustomButton buttonText={"Submit"} onPress={()=>{makeGetRequest()}}/>
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
