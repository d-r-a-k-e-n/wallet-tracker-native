import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import TextLink from '@/components/ui/textLink';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function LoginForm() {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" />
      </View>

      <TextLink style={styles.textLink} text="Forgot password" href="/modal" />

      <Button
        textButton="Sign In"
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
  },
  formContainer: {
    gap: 24,
  },
  inputContainer: {
    gap: 20,
  },
});
