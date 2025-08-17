import Image from "next/image";

export function Logo({ size = 50 }: { size?: number }) {
  return (
    <Image
      src="/logo.svg"
      alt="Cyber Sentinels Logo"
      width={size}
      height={size}
      className="object-contain"
    />
  );
}
