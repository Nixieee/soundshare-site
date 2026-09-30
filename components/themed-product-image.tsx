import Image, { type ImageProps } from "next/image"

type Props = Pick<ImageProps, "width" | "height" | "alt" | "sizes" | "loading" | "fetchPriority" | "className"> & {
  image: string
}

// CSS follows the root theme immediately, including the saved theme before hydration.
export function ThemedProductImage({ image, alt, className = "", ...props }: Props) {
  return (
    <>
      <Image {...props} alt={alt} src={`/images/product/${image}-light.webp`} className={`product-image-light ${className}`} />
      <Image {...props} alt={alt} src={`/images/product/${image}-dark.webp`} className={`product-image-dark ${className}`} />
    </>
  )
}
