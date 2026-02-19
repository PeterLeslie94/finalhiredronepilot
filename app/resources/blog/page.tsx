import { permanentRedirect } from 'next/navigation';

export default function LegacyResourcesBlogRedirect() {
  permanentRedirect('/blog');
}
