import ImageGallery from "../components/ImageGallery";
import "lazysizes";
import "lazysizes/plugins/attrchange/ls.attrchange";

function Lazy({ images }) {
  const dimensions = {
    height: 350,
    width: 350,
    objectFit: 'cover'
  };
  return (
    <div>
      <h1>Img with lazysizes</h1>
      <ImageGallery images={images} dimensions={dimensions} customLazy={true} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://taringa.net/api/feed/list/globalHome?count=150&filter=article&sort=bigbang1d&globalSafe=true&nsfw=false"
  );
  const result = await res.json();
  const images = result.items
    .filter((item) => item.summary.images.slice.length !== 0)
    .map((item) => {
      return {
        id: item.id,
        title: item.title,
        src: item.summary.images.slice[0].url,
      };
    });

  return {
    props: {
      images,
    },
    revalidate: 60,
  };
}

export default Lazy;
