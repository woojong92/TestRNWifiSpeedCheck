import React, {useState} from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import {measureConnectionSpeed} from 'react-native-network-bandwith-speed';

// const getNetworkBandwidth = async () => {
//   try {
//     const networkSpeed = await measureConnectionSpeed();
//     return networkSpeed;
//     // console.log(networkSpeed); // Network bandwidth speed
//   } catch (err) {
//     console.log(err);
//   }
// };

function App() {
  const [wifiSpeed, setWifiSpeed] = useState('not yet');
  const [loading, setLoading] = useState(false);

  const checkWifi = async () => {
    setLoading(true);
    try {
      const networkSpeed = await measureConnectionSpeed();
      // setWifiSpeed(networkSpeed);
      console.log(networkSpeed); // Network bandwidth speed
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="checkWifi" onPress={checkWifi} />
      )}
    </View>
  );
}

export default App;
