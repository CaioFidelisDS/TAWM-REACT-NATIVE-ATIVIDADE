import {Home} from '../screens/Home';
import {Gallery} from '../screens/Gallery';
import {Tela2} from '../screens/Tela2';
import { createStackNavigator } from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
  return (
   <Navigator screenOptions={{headerShown:false}}>
    <Screen name='home' component={Home}></Screen>
    <Screen name='gallery' component={Gallery}></Screen>
    <Screen name='tela2' component={Tela2}></Screen>
   </Navigator>
  );
}