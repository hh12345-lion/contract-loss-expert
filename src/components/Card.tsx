import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { photos, type PhotoKey } from "@/lib/images";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  /** Image shown above the text (guide thumbnails). */
  image?: string;
  imageAlt?: string;
  /** Site photograph used as the card's background. */
  photo?: PhotoKey;
  children?: ReactNode;
}

export function Card({
  title,
  description,
  href,
  image,
  imageAlt,
  photo,
  children,
}: CardProps) {
  if (photo) {
    const inner = (
      <>
        <Image
          src={photos[photo].src}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="-z-20 object-cover transition-transform duration-700 group-hover:scale-105"
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/80 to-primary/25"
          aria-hidden
        />
        <div className="flex h-full min-h-[15rem] flex-col justify-end p-6">
          <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
          {description && (
            <p className="mt-2 text-sm leading-relaxed text-white/85">{description}</p>
          )}
          {children}
          {href && (
            <span className="mt-4 inline-block text-sm font-semibold text-highlight">
              Read more →
            </span>
          )}
        </div>
      </>
    );
    const photoClass =
      "dog-ear group relative isolate block h-full overflow-hidden bg-primary";
    return href ? (
      <Link href={href} className={photoClass}>
        {inner}
      </Link>
    ) : (
      <div className={photoClass}>{inner}</div>
    );
  }

  const inner = (
    <>
      {image ? (
        <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden bg-[#F3EEE5]">
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
    "dog-ear block h-full border-l-4 border-l-accent bg-white p-6 transition-colors hover:border-l-highlight";

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}
