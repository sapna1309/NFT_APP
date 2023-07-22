//import { StatusBar } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useIsFocused } from "@react-navigation/native";

const FocusedStatusBar = (props) => {

  const isFocused = useIsFocused();   

  return isFocused ? <StatusBar animated={true} style='light' {...props} /> : null;
}

export default FocusedStatusBar