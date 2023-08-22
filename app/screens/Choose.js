import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const Choose = () => {
  const [vehicleType, setVehicleType] = useState(null);
  const [connectionMethod, setConnectionMethod] = useState(null);
  const [fontsLoaded] = useFonts({
    'RobotoSlab-Regular': require('../assets/Font/RobotoSlab-Regular.ttf'),
    'RobotoSlab-Bold': require('../assets/Font/RobotoSlab-Bold.ttf'),
  });

  const handleVehicleTypeSelect = (type) => {
    setVehicleType(type);
  };

  const handleConnectionMethodSelect = (method) => {
    setConnectionMethod(method);
  };

  const handleSubmit = () => {
    if (vehicleType && connectionMethod) {
      console.log('Loại phương tiện:', vehicleType);
      console.log('Phương thức kết nối:', connectionMethod);
    } else {
      console.log('Vui lòng chọn loại phương tiện và phương thức kết nối.');
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleCennter}>Hãy cho chúng tôi biết thêm về bạn:</Text>
      <Text style={styles.title}>Chọn loại phương tiện:</Text>
      <TouchableOpacity
        style={[
          styles.optionButton,
          vehicleType === 'xeGanMay' && styles.selectedOptionButton,
        ]}
        onPress={() => handleVehicleTypeSelect('xeGanMay')}
      >
        <Text style={styles.optionText}>Xe gắn máy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionButton,
          vehicleType === 'xeOto' && styles.selectedOptionButton,
        ]}
        onPress={() => handleVehicleTypeSelect('xeOto')}
      >
        <Text style={styles.optionText}>Xe ô tô</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Chọn phương thức kết nối:</Text>
      <TouchableOpacity
        style={[
          styles.optionButton,
          connectionMethod === 'cameraDienThoai' && styles.selectedOptionButton,
        ]}
        onPress={() => handleConnectionMethodSelect('cameraDienThoai')}
      >
        <Text style={styles.optionText}>Camera điện thoại</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionButton,
          connectionMethod === 'cameraHanTrinh' && styles.selectedOptionButton,
        ]}
        onPress={() => handleConnectionMethodSelect('cameraHanTrinh')}
      >
        <Text style={styles.optionText}>Camera hành trình</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleCennter: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    alignSelf: 'flex-start',
    marginLeft: 40,
    fontFamily: 'RobotoSlab-Bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    fontFamily: 'RobotoSlab-Regular',
  },
  optionButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ddd',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 30,
    width: 200,
    alignItems: 'center',
  },
  selectedOptionButton: {
    borderColor: '#D1F2DD',
    backgroundColor: '#D8F2DD',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'RobotoSlab-Regular',
  },
  submitButton: {
    backgroundColor: '#D8F2DD',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 30,
  }, 
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'RobotoSlab-Regular',
  },
});

export default Choose