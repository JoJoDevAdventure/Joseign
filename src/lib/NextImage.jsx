// src/lib/NextImage.tsx
import NextImage from "next/image";

export default function ImageShim() {
  const { width, height, fill, className, boxClassName, ...rest } = props;

  // If caller provided width/height or fill, use NextImage as-is.
  if ((width && height) || fill) {
    return <NextImage width={width} height={height} fill={fill} className={className} {...rest} />;
  }

  // No width/height → wrap and use fill
  // Give the wrapper a sensible default size (override per-usage via className on parent or boxClassName)
  return (
    <div className={boxClassName ?? "relative h-8 w-auto"}>
      <NextImage fill className={className ?? "object-contain"} sizes="100vw" {...rest} />
    </div>
  );
}