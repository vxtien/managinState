import { useState, useContext, createContext } from "react";
import { places } from "./data-places";
import { getImageUrl } from "./utils";
// import { ImageSizeContext } from "./Context";

const ImageSizeContext = createContext();
console.log('context:', ImageSizeContext);

const ExampleUseContext = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <ImageSizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  );
};
export default ExampleUseContext;

const List = () => {
  return (
    <ul>
      {places.map((place) => (
        <li key={place.id} style={{listStyle:'none'}}>
          <Place place={place} />
        </li>
      ))}
    </ul>
  );
};

const Place = ({ place }) => {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
};

const PlaceImage = ({ place }) => {
  const imageSize = useContext(ImageSizeContext);
  console.log(imageSize);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
};
