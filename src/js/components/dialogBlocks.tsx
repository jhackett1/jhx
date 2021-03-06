import * as React from "react"

export const TextBlock = ({ children }: { children: React.ReactChildren }) => (
  <section className="text-block">{children}</section>
)

export const GalleryBlock = ({
  images,
  caption,
  startFrom,
}: {
  images: { src: string; alt: string }[]
  caption: string
  startFrom?: number
}) => (
  <section className="gallery-block">
    <div className="gallery-block__content">
      {images.map((image, i) => (
        <figure key={image.src}>
          <img src={image.src} alt={image.alt} />
          <figcaption>
            Fig. {isNaN(startFrom) ? i + 1 : startFrom + i}
          </figcaption>
        </figure>
      ))}
    </div>
    <p className="gallery-block__caption">{caption}</p>
  </section>
)

export const UserStoriesBlock = ({
  children,
  caption,
}: {
  children: React.ReactNode
  caption: string
}) => (
  <section className="user-stories-block">
    <ul className="user-stories-block__content">{children}</ul>
    <p className="user-stories-block__caption">{caption}</p>
  </section>
)
