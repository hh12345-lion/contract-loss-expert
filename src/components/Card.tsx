import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}

export function Card({
  title,
  description,
  href,
  image,
  imageAlt,
  children,
}: CardProps) {
  const inner = (
    <>
      {image ? (
        <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-md bg-[#F5F0E8]">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <h3 className="font-display text-lg font-semibold text-heading">{title}</h3>
      {description && (
        <p className="mt-2 text-body leading-relaxed">{description}</p>
      )}
      {children}
      {href && (
        <span className="mt-3 inline-block text-sm font-medium text-accent">
          Read more →
        </span>
      )}
    </>
  );

  const className =
    "block h-full border border-border border-l-4 border-l-accent bg-white p-6 transition-colors hover:border-l-highlight";

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}
