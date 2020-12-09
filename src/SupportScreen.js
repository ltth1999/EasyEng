import React from 'react';
import {
  View, 
  Text, 
  Button, 
  StyleSheet, 
  StatusBar,
  Linking
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
const SupportScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
       <StatusBar barStyle="dark-content"/>
         <View
        style={{
          backgroundColor: '#ffd700',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Ionicons.Button name="ios-menu" size={25} backgroundColor="#ffd700" 
        onPress={() => navigation.openDrawer()}></Ionicons.Button>
        <Text style={{fontSize: 20, color: 'white', fontWeight:'bold'}}> Problems</Text>
       
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Support1')}
        style={{
          flexDirection:"row",
          backgroundColor: '#fff',
          width: '96%',
          alignSelf:'center',
          borderRadius: 5,
          padding: 10,
          shadowColor: '#ccc',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10,
          color: '#696969',
          marginTop: 20
          
        
        }}>
        <Text>Làm thế nào để giữ vững tốc độ luyện tập chuyên cần?</Text>
       
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Support2')}
        style={{
          flexDirection:"row",
          backgroundColor: '#fff',
          width: '96%',
          alignSelf:'center',
          borderRadius: 5,
          padding: 10,
          shadowColor: '#ccc',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10,
          color: '#696969',
          marginTop: 20
        }}>
        <Text>Làm thế nào để di chuyển đến bài học tiếp theo?</Text>
      
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection:"row",
          backgroundColor: '#fff',
          width: '96%',
          alignSelf:'center',
          borderRadius: 5,
          padding: 10,
          shadowColor: '#ccc',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10,
          color: '#696969',
          marginTop: 20
        }}>
        <Text>Tại sao ứng dụng không có thông báo khi đã yêu thích?</Text>
        
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection:"row",
          backgroundColor: '#fff',
          width: '96%',
          alignSelf:'center',
          borderRadius: 5,
          padding: 10,
          shadowColor: '#ccc',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10,
          color: '#696969',
          marginTop: 20
        }}>
        <Text>Tại sao không thể tải được bài học?</Text>
        
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Support5')}
        style={{
          flexDirection:"row",
          backgroundColor: '#fff',
          width: '96%',
          alignSelf:'center',
          borderRadius: 5,
          padding: 10,
          shadowColor: '#ccc',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10,
          color: '#696969',
          marginTop: 20
        }}>
        <Text>Tại sao không có âm thanh trong ứng dụng?</Text>
       
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Linking.openURL('https://mail.google.com/mail/mu/mp/129/#co')}
        style={{
          marginTop: 200,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 40,
          borderWidth: 1,
          backgroundColor: 'yellow',
          height: 50,
          borderColor: 'yellow',
          width: '90%',         
          marginLeft: 15
         
         
        }}>
        <Text>Không có vấn đề tương tự? Viết thư có chúng tôi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
