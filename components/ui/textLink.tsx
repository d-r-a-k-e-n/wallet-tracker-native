import { useThemeColor } from '@/hooks/use-theme-color';
import { Href, Link } from 'expo-router';

interface IProp {
  text: string;
  href: Href;
  style?: any;
}

export default function TextLink({ text, href, style }: IProp) {
  const accent = useThemeColor({}, 'tint');

  return (
    <Link style={[{ color: accent, fontWeight: '600' }, style]} href={href}>
      {text}
    </Link>
  );
}
