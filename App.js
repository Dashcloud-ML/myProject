import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
import firebase from 'firebase';

const Page1 = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [occupation, setOccupation] = useState('');
  const [company, setCompany] = useState('');

  const handleSave = () => {
    firebase.firestore().collection('users').add({
      firstName,
      lastName,
      dob,
      occupation,
      company,
    })
    .then(() => {
      navigation.navigate('Page2', {
        firstName,
        lastName,
        dob,
        occupation,
        company,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <View>
      <Text>First Name</Text>
      <TextInput value={firstName} onChangeText={setFirstName} />
      <Text>Last Name</Text>
      <TextInput value={lastName} onChangeText={setLastName} />
      <Text>Date of Birth</Text>
      <DatePicker
        date={dob}
        onDateChange={setDob}
        mode="date"
      />
      <Text>Occupation</Text>
      <TextInput value={occupation} onChangeText={setOccupation} />
      <Text>Company</Text>
      <TextInput value={company} onChangeText={setCompany} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default Page1;
