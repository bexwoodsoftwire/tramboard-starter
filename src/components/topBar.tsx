import { StackHeaderProps } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'
import { getEqualHitSlop } from '../helpers/hitSlopHelper'

type TopBarProps = StackHeaderProps

const TopBar = ({ navigation, progress }: TopBarProps) => (
  <Appbar.Header>
    {progress.previous && (
      <Appbar.BackAction
        style={styles.backButton}
        hitSlop={getEqualHitSlop(30)}
        onPress={navigation.goBack}
      />
    )}
    <Appbar.Content titleStyle={styles.title} title="Tram Board" />
  </Appbar.Header>
)

export default TopBar

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
  },
  backButton: {
    position: 'absolute',
  },
})
