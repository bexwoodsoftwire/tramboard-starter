import { FlatList, Linking, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import DropDownList from '../components/dropDownList'
import CustomButton from '../components/button'
import React from 'react'
import axios from 'axios'

const getMetrolinkStops = () => {
  return ([
    {key:'1', value:'Piccadilly'},
    {key:'2', value:'Piccadilly Gardens'},
    {key:'3', value:'St Peter\'s Square'},
    {key:'4', value:'Deansgate - Castlefield'},
    {key:'5', value:'Cornbrook'},
  ])
}

const mapDepartures = (departureObject: any) => (
  [
    {id: '01', destination: departureObject.Dest0, status: departureObject.Status0, wait: departureObject.Wait0},
    {id: '02', destination: departureObject.Dest1, status: departureObject.Status1, wait: departureObject.Wait1},
    {id: '03', destination: departureObject.Dest2, status: departureObject.Status2, wait: departureObject.Wait2},
    {id: '04', destination: departureObject.Dest3, status: departureObject.Status3, wait: departureObject.Wait3}
  ]
).filter(function(tram: any) {return tram.destination!=''})

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

const makeGetRequest = async (selectedStop: string, setDeparturesAtStop: any) => {
  const response = await axios({
    method: 'get',
    url: 'https://api.tfgm.com/odata/Metrolinks?',
    headers: {"Ocp-Apim-Subscription-Key": '695237a1c5044581802bbcbe83adb0b7'}
  })

  const cornbrookScreen = response.data.value.filter(function(tram: any) {return tram.StationLocation==selectedStop && tram.Direction=='Incoming'})[0]
  const departures = mapDepartures(cornbrookScreen)
  setDeparturesAtStop(departures)
};



type ItemProps = {destination: any, status: any, wait: any};
const Item = ({destination, status, wait}: ItemProps) => (
  <View style={styles.departureItem}>
    <Text>Tram to {destination} {status} in {wait} minutes</Text>
  </View>
)

const DetailsScreen = () => {
  const [selectedStop, setSelectedStop] = React.useState("");
  const [departuresAtStop, setDeparturesAtStop] = React.useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Departures</Text>
      <DropDownList data={getMetrolinkStops()} setSelected={setSelectedStop}/>
      <CustomButton buttonText={"Submit"} onPress={()=>{makeGetRequest(selectedStop, setDeparturesAtStop)}}/>
      {departuresAtStop && (
      <FlatList
        data={departuresAtStop}
        renderItem={({item}) => <Item destination={item.destination} status={item.status} wait={item.wait}/>}
        keyExtractor={item => item.id}
      />)}
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
  text: {
    margin: 10,
  },
  departureItem:{
    backgroundColor: 'gold',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderColor: 'black',
  }
})
