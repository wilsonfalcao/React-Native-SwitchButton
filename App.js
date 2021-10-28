import React,{useState} from 'react';
import { View,StyleSheet} from 'react-native';

//telas
import SwitchButton from './component/switchButton';

export default function App() {

  const [validSwitchButton, setValidSwitchButton] = useState(false);

  return (
    <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
      }}
    >
      <View style={{ 
        width:140,
        height:40,
      }}>
        <SwitchButton
          NameOn={"SIM"}
          NameOff={"NÃO"}
          Width={140}
          Height={40} 
          IsOn={setValidSwitchButton} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAnimated:{
    fontSize:20,
    fontWeight:"bold",
    color:"rgb(40,224,70)",
    marginBottom:50,
  }
});
