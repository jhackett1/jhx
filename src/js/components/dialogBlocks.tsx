import * as React from "react"

export const TextBlock = ({ children }: { children: React.ReactChildren }) => (
  <section className="dialog__text-block">{children}</section>
)

export const GalleryBlock = ({
  images,
  caption,
}: {
  images: { src: string; alt: string }[]
  caption: string
}) => (
  <figure className="dialog__gallery-block">
    {images.map(image => (
      <img src={image.src} alt={image.alt} key={image.src} />
    ))}
    <caption>{caption}</caption>
  </figure>
)

export const UserStoriesBlock = ({
  userStories,
  caption,
}: {
  userStories: React.ReactChildren[]
  caption: string
}) => <section className="dialog__user-stories-block"></section>
