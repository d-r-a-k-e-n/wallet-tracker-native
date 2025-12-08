import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function RegisterForm() {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Input placeholder="Name" />
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm password" />
      </View>

      <Button
        textButton="Sign Up"
        variant={isActive ? 'accent' : 'disabled'}
        onPress={() => {
          setIsActive(!isActive);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textLink: {
    textAlign: 'right',
    fontWeight: '600',
  },
  formContainer: {
    gap: 24,
  },
  inputContainer: {
    gap: 20,
  },
});
