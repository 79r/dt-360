import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
// import Image1 from "../assets/images/tj110cok-360-panorama-kitchen.jpeg";
// import Image2 from "../assets/images/lk110lu8-360-panorama-view-bridge.jpeg";
// import Image3 from "../assets/images/4se195z-a-room-filled-with-furniture-and-a-large-window.jpeg";
// import Image4 from "../assets/images/wdb0lzy-360-panorama-view-fisherman-wharf.jpeg";
// import Image5 from "../assets/images/ci1sezq-a-bedroom-with-a-large-cake.jpeg";
// import Image6 from "../assets/images/5591260-a-living-room-filled-with-furniture-and-a-large-window.jpeg";

// /** Thumbnail */
// import Thumbnail1 from "../assets/images/thumbnails/tj110cok-360-panorama-kitchen.jpg";
// import Thumbnail2 from "../assets/images/thumbnails/lk110lu8-360-panorama-view-bridge.jpg";
// import Thumbnail3 from "../assets/images/thumbnails/4se195z-a-room-filled-with-furniture-and-a-large-window.jpg";
// import Thumbnail4 from "../assets/images/thumbnails/wdb0lzy-360-panorama-view-fisherman-wharf.jpg";
// import Thumbnail5 from "../assets/images/thumbnails/ci1sezq-a-bedroom-with-a-large-cake.jpg";
// import Thumbnail6 from "../assets/images/thumbnails/5591260-a-living-room-filled-with-furniture-and-a-large-window.jpg";

import imagePan3 from "../assets/360/rev/Pan3.jpg";
import imagePanorama2021 from "../assets/360/rev/PANORAMA2021.jpg";
import imageToiletLT1 from "../assets/360/rev/toilet-lt1.jpg";

/** Covers */
import coverImagePan3 from "../assets/360/covers/Pan3.jpg";
import coverImagePanorama2021 from "../assets/360/covers/PANORAMA2021.jpg";
import coverImageToiletLT1 from "../assets/360/covers/toilet-lt1.jpg";

const BASE_PATH = "/360";

// export const data = [
//   {
//     title: "360 Panorama Kitchen",
//     slug: "kitchen",
//     image: Image1,
//     thumbnail: Thumbnail1,
//     pitch: 0,
//     yaw: 0,
//     hfov: 500,
//     autoRotate: 0,
//     hotspots: [
//       {
//         pitch: -6,
//         yaw: -139,
//         text: "Hello World",
//         path: BASE_PATH + "/bridge",
//       },
//     ],
//   },
//   {
//     title: "360 Panorama View Bridge",
//     slug: "bridge",
//     image: Image2,
//     thumbnail: Thumbnail2,
//     pitch: 0,
//     yaw: 50,
//     hfov: 500,
//     hotspots: [
//       {
//         pitch: -3,
//         yaw: 17,
//         text: "Hello World",
//         path: BASE_PATH + "/furniture-a-large-window",
//       },
//     ],
//   },
//   {
//     title: "360 Panorama Furniture and A Large Window",
//     slug: "furniture-a-large-window",
//     image: Image3,
//     thumbnail: Thumbnail3,
//     pitch: 0,
//     yaw: 0,
//     hfov: 500,
//     hotspots: [
//       {
//         pitch: -50,
//         yaw: -10,
//         text: "Hello World",
//         path: BASE_PATH + "/furniture-a-large-window2",
//       },
//     ],
//   },
//   {
//     title: "360 Panorama Fisherman",
//     slug: "fisherman",
//     image: Image4,
//     thumbnail: Thumbnail4,
//     pitch: 10,
//     yaw: 180,
//     hfov: 500,
//     hotspots: [
//       {
//         pitch: 10,
//         yaw: 180,
//         text: "Hello World",
//         path: BASE_PATH + "/kitchen",
//       },
//     ],
//   },
//   {
//     title: "360 Panorama Large Cake",
//     slug: "large-cake",
//     image: Image5,
//     thumbnail: Thumbnail5,
//     pitch: 10,
//     yaw: 180,
//     hfov: 500,
//     hotspots: [
//       {
//         pitch: 10,
//         yaw: 180,
//         text: "Hello World",
//         path: BASE_PATH + "/furniture-a-large-window2",
//       },
//     ],
//   },
//   {
//     title: "360 Panorama Furniture And A Large Window2",
//     slug: "furniture-a-large-window2",
//     image: Image6,
//     thumbnail: Thumbnail6,
//     pitch: 10,
//     yaw: 180,
//     hfov: 500,
//     hotspots: [
//       {
//         pitch: 10,
//         yaw: 180,
//         text: "Hello World",
//         path: BASE_PATH + "/kitchen",
//       },
//     ],
//   },
// ];

export const realData = [
  {
    title: "360 Panorama Pan3",
    slug: "pan3",
    image: imagePan3,
    thumbnail: coverImagePan3,
    pitch: 0,
    yaw: 0,
    hfov: 500,
    autoRotate: 0,
    hotspots: [
      {
        pitch: 1,
        yaw: -98,
        text: "Lorem Ipsum",
        path: BASE_PATH + "/2021",
      },
    ],
  },
  {
    title: "360 Panorama 2021",
    slug: "2021",
    image: imagePanorama2021,
    thumbnail: coverImagePanorama2021,
    pitch: 0,
    yaw: 0,
    hfov: 500,
    autoRotate: 0,
    hotspots: [
      {
        pitch: -6,
        yaw: 100,
        text: "Lorem Ipsum",
        path: BASE_PATH + "/toilet",
      },
    ],
  },
  {
    title: "360 Panorama Toilet Lt 1",
    slug: "toilet",
    image: imageToiletLT1,
    thumbnail: coverImageToiletLT1,
    pitch: 0,
    yaw: 0,
    hfov: 500,
    autoRotate: 0,
    hotspots: [
      {
        pitch: -6,
        yaw: 60,
        text: "Lorem Ipsum",
        path: BASE_PATH + "/pan3",
      },
    ],
  },
];

export const threeSixTyContext = createContext(realData);

const ThreeSixTyProvider = ({ children }) => {
  return (
    <threeSixTyContext.Provider value={realData}>
      {children}
    </threeSixTyContext.Provider>
  );
};

export const useThreeSixTy = () => {
  return useContext(threeSixTyContext);
};

ThreeSixTyProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThreeSixTyProvider;
