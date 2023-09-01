import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const Choose = ({navigation}) => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
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
      navigation.navigate("CameraScreen");
    } else {
      setShowErrorMessage(true);
      console.log("Lỗi sai phương thức");
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000); 
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
          vehicleType === 'Moto' ? styles.selectedOptionButton : null,
        ]}
        onPress={() =>
          handleVehicleTypeSelect(vehicleType === 'Moto' ? null : 'Moto')
        }
      >
        <Text style={styles.optionText}>Xe gắn máy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionButton,
          vehicleType === 'Oto' ? styles.selectedOptionButton : null,
        ]}
        onPress={() =>
          handleVehicleTypeSelect(vehicleType === 'Oto' ? null : 'Oto')
        }
      >
        <Text style={styles.optionText}>Xe ô tô</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Chọn phương thức kết nối:</Text>
      <TouchableOpacity
        style={[
          styles.optionButton,
          connectionMethod === 'DienThoai' ? styles.selectedOptionButton : null,
        ]}
        onPress={() =>
          handleConnectionMethodSelect(
            connectionMethod === 'DienThoai' ? null : 'DienThoai'
          )
        }
      >
        <Text style={styles.optionText}>Camera điện thoại</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionButton,
          connectionMethod === 'HanhTrinh' ? styles.selectedOptionButton : null,
        ]}
        onPress={() =>
          handleConnectionMethodSelect(
            connectionMethod === 'HanhTrinh' ? null : 'HanhTrinh'
          )
        }
      >
        <Text style={styles.optionText}>Camera hành trình</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.errorMessageContainer}>
        {showErrorMessage && (
          <Text style={styles.errorMessage}>
            Vui lòng chọn loại phương tiện và phương thức kết nối.
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleCennter: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
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
    marginTop: 20,
    marginBottom: 20,
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
    paddingHorizontal: 70,
    borderRadius: 5,
    marginTop: 50,
  }, 
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'RobotoSlab-Regular',
  },
  errorMessageContainer: {
    position: 'absolute', // Đặt vị trí tuyệt đối
    bottom: 0, // Đặt dưới cùng màn hình
    width: '0', // Rộng bằng 100% màn hình
    backgroundColor: 'rgba(255, 0, 0, 0.8)', // Màu đỏ với độ trong suốt 80%
    paddingVertical: 10, // Khoảng cách dọc
    alignItems: 'center', // Canh giữa theo chiều ngang
  },
  errorMessage: {
    color: 'white', // Màu trắng cho chữ
    fontSize: 16,
    fontFamily: 'RobotoSlab-Regular',
    textAlign: 'center', // Căn lề giữa
  },
});

export default Choose