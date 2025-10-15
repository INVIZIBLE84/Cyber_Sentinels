import Image from 'next/image';

export function Logo({ size = 50 }: { size?: number }) {
  // Assuming the original logo aspect ratio was roughly 240/80 = 3:1
  // The new logo appears to be closer to square.
  // We'll use size for both width and height to make it a square,
  // which can be adjusted if the actual logo has different dimensions.
  return (
    <Image
      src="/logo.png"
      alt="The Cyber Sentinels Logo"
      width={size}
      height={size}
      priority // Ensures the logo loads quickly, important for LCP
    />
  );
}
