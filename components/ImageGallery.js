import styles from "./ImageGallery.module.css";

function ImageGallery({ images, dimensions, customLazy = false }) {
  const customLazyAttr = (url) =>
    !customLazy
      ? { src: url }
      : {
          "data-src": url,
          src:
            "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw",
        };
  return (
    <article className={styles.container}>
      {images.map((image) => (
        <div style={{height: dimensions.height, width: dimensions.width}} key={image.id} className={styles.item}>
          <header>{image.title}</header>
          <img
            className="lazyload"
            loading="lazy"
            alt={image.title}
            {...customLazyAttr(image.src)}
            style={dimensions}
          />
        </div>
      ))}
    </article>
  );
}

export default ImageGallery;
