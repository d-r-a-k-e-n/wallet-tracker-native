import LoginForm from '@/components/form/loginForm';
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
          Sign In
        </ThemedText>
        <View style={styles.contsiner}>
          <LoginForm />

          <ThemedText style={styles.textUnderForm}>
            I don't have an account,{' '}
            <TextLink text="create an account" href="/(tabs)/register" />
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
