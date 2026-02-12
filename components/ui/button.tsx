import { useThemeColor } from '@/hooks/use-theme-color';
import { Pressable, StyleSheet, Text } from 'react-native';

type Variant = 'default' | 'accent' | 'disabled';

interface IProp {
  textButton: string;
  disabled?: boolean;
  variant?: Variant;
  onPress?: () => void;
}

export default function Button({
  textButton,
  disabled = false,
  variant = 'accent',
  onPress,
}: IProp) {
  const accent = useThemeColor({}, 'tint');
  const background = useThemeColor({}, 'background');
  const light = useThemeColor({}, 'light');
  const text = useThemeColor({}, 'text');

  const variantStyles = {
    default: {
      backgroundColor: accent,
      borderWidth: 1,
      borderColor: accent,
      textColor: light,
    },
    accent: {
      backgroundColor: accent,
      borderWidth: 1,
      borderColor: accent,
      textColor: light,
    },
    disabled: {
      backgroundColor: background,
      borderWidth: 1,
      borderColor: text,
      textColor: text,
    },
  };

  const v = variantStyles[variant];

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: v.backgroundColor,
          borderWidth: v.borderWidth,
          borderColor: v.borderColor,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, { color: v.textColor }]}>
        {textButton}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 12,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});
