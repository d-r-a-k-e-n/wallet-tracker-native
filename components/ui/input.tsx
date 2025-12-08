import { useThemeColor } from '@/hooks/use-theme-color';
import { StyleSheet, TextInput } from 'react-native';

interface Prop {
  placeholder: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

export default function Input({ placeholder, keyboardType = 'default' }: Prop) {
  const borderColor = useThemeColor({}, 'text');

  return (
    <TextInput
      style={[styles.input, { borderColor: borderColor, color: borderColor }]}
      placeholder={placeholder}
      placeholderTextColor={borderColor}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
});
