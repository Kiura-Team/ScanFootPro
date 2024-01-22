import React, {useState} from 'react';
import {TextInput, Button, Alert, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface InputTextProps {
  onchageText: (e: string) => void;
  name: string;
  IconName?: string;
  Type: string;
  color: string;
}
export const InputText = ({
  onchageText,
  name,
  IconName,
  Type,
  color,
}: InputTextProps) => {
  const [text, setText] = useState('');
  const [Password, setPassword] = useState(true);

  const handleTextChange = newText => {
    setText(newText);
    onchageText(newText);
  };
  const handlePassword = () => {
    setPassword(!Password);
  };

  return (
    <>
      <View style={style.container}>
        {Type === 'Email' ? (
          <View style={style.input}>
            <Icon name="mail-outline" size={30} color={color} />
            <TextInput
              style={{
                height: 40,
                width: '87%',
              }}
              onChangeText={handleTextChange}
              keyboardType="email-address"
              value={text}
              placeholder={name}
            />
          </View>
        ) : Type === 'Password' ? (
          <View style={style.input}>
            <Icon name="lock-closed-outline" size={30} color={color} />
            <TextInput
              style={{
                height: 40,
                width: '75%',
              }}
              onChangeText={handleTextChange}
              value={text}
              placeholder="Password"
              secureTextEntry={Password}
            />
            <TouchableOpacity onPress={() => handlePassword()}>
              <Icon
                name={Password ? 'eye-off' : 'eye'}
                size={30}
                color={color}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={style.input}>
            <Icon name={IconName} size={30} color={color} />
            <TextInput
              style={{
                height: 40,
                width: '80%',
              }}
              onChangeText={handleTextChange}
              value={text}
              placeholder={name}
            />
          </View>
        )}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    width: '80%',
    flexDirection: 'row',
    borderBottomColor: '#364989',
    borderWidth: 1,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
