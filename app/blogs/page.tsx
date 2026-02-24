import { permanentRedirect } from 'next/navigation';

export default function LegacyBlogsRedirect() {
  permanentRedirect('/blog');
}
