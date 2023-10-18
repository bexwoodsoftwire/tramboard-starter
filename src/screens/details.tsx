import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import DropDownList from '../components/dropDownList'
import CustomButton from '../components/button'

const getMetrolinkStops = () => {
  return ([
    {key:'1', value:'Piccadilly'},
    {key:'2', value:'Piccadilly Gardens'},
    {key:'3', value:'St Peter\'s Square'},
    {key:'4', value:'Deansgate-Castlefield'},
    {key:'5', value:'Cornbrook'},
  ])
}

const DetailsScreen = () => {
  const data = getMetrolinkStops()
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <DropDownList data={data}/>
      <CustomButton buttonText={"Submit"} onPress={()=>{}}/>
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
