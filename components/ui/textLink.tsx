import { useThemeColor } from '@/hooks/use-theme-color';
import { Href, Link } from 'expo-router';

interface Prop {
  text: string;
  href: Href;
  style?: any;
}

export default function TextLink({ text, href, style }: Prop) {
  const accent = useThemeColor({}, 'tint');

  return (
    <Link style={[{ color: accent, fontWeight: '600' }, style]} href={href}>
      {text}
    </Link>
  );
}
