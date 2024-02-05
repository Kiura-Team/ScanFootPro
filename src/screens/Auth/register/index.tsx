import {View, Text, ImageBackground, Image, Keyboard, ToastAndroid} from 'react-native';
import React from 'react';
import Butukon from '../../../components/Butukon';
import {globalStyles} from '../../../theme/Styles';
import styles from './Styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {RootTopTabParams} from '../../../navigations/TopTabNavigatorAuth';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import useForm from '../../../hooks/useForm';
import { DismissKeyboard } from '../../../components/DismissKeyboard';
import { InputText } from '../../../components/InputText';

interface Props extends MaterialTopTabScreenProps<RootTopTabParams, 'login'> {}

const Register = ({navigation}: Props) => {
  const {form, onChange, resetForm} = useForm({
    email: 'keynerDElahoz@gmail.com',
    password: '123456789',
  });
  console.log(form);
  const height = useSharedValue(380);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      justifyContent: 'space-around',
      width: '100%',
      alignItems: 'center',
      // backgroundColor: 'red',
      height: height.value,
    };
  });
  Keyboard.addListener('keyboardDidShow', () => {
    animateHeight(280);
  });
  Keyboard.addListener('keyboardDidHide', () => {
    animateHeight(380);
  });
  const animateHeight = (x: any) => {
    height.value = withTiming(x, {duration: 100});
  };
  return (
    <DismissKeyboard>
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/img/pie.png')}
        style={{
          position: 'absolute',
          top: -110,
          opacity: 0.3,
          width: '100%',
          height: 500,
        }}
      />
      <Animated.View style={animatedStyle}>
        <InputText
          onchageText={e => onChange(e, 'email')}
          name="Email"
          Type="Email"
          color="#364989"
          value={form.email}
        />
        <InputText
          onchageText={e => onChange(e, 'password')}
          name="Password"
          IconName="mail-outline"
          Type="Password"
          color="#364989"
          value={form.password}
        />
        <Butukon
          title="Inicia sessión"
          height={60}
          border={20}
          onclick={() => console.log('helllo')}
        />
         <View style={styles.sectionBotton}>
          <Text style={styles.parrafo}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('login')}
            activeOpacity={0.9}>
            <Text style={{...styles.parrafo, color: '#000'}}>Inicia sessión</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <View
        style={{
          // borderWidth: 1,
          // borderColor: 'red',
          width: '100%',
          alignItems: 'center',
          gap: 20,
        }}>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
          }}>
          O inicia sesión con:{' '}
        </Text>
        <Butukon
          title="Inicia sessión"
          height={60}
          border={20}
          onclick={() => () => console.log('hello desde aki')}
          icon="logo-google"
        />
      </View>
    </ScrollView>
  </DismissKeyboard>
  );
};

export default Register;
