import RegisterForm from '@/components/form/registerForm';
import { ThemedText } from '@/components/themed-text';
import TextLink from '@/components/ui/textLink';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const background = useThemeColor({}, 'background');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
      <ScrollView>
        <ThemedText style={styles.header} type="title">
          Sign Up
        </ThemedText>

        <View style={styles.contsiner}>
          <RegisterForm />

          <ThemedText style={styles.textUnderForm}>
            I have an account,{' '}
            <TextLink text="log in to my account" href="/(tabs)/login" />
          </ThemedText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contsiner: {
    paddingHorizontal: 16,
    gap: 24,
  },
  header: {
    textAlign: 'center',
    fontSize: 36,
    lineHeight: 1.2 * 36,
    fontWeight: '600',
    marginVertical: 48,
  },
  textUnderForm: {
    textAlign: 'center',
  },
});
