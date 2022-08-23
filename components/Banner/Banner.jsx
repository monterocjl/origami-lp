
import { useState } from "react";
import { Box, Icon} from "@chakra-ui/react";
import { FaRegCircle, FaCircle } from "react-icons/fa";
import ArrowLeft from "../Arrows/ArrowLeft";
import ArrowRight from "../Arrows/ArrowRight";
import ContentBannerOne from "./ContentBanner/ContentBannerOne";
import ContentBannerTwo from "./ContentBanner/ContentBannerTwo";
import ContentBannerThree from "./ContentBanner/ContentBannerThree";

export default function Banner() {
  const [currentImage, setCurrentImage] = useState(0);

  function goToPrevious() {
    const isFirstImage = currentImage === 0;
    const previousImage = isFirstImage ? IMAGES.length - 1 : currentImage - 1;
    setCurrentImage(previousImage);
  }

  function goToNext() {
    const isLastImage = currentImage === IMAGES.length - 1;
    const nextImage = isLastImage ? 0 : currentImage + 1;
    setCurrentImage(nextImage);
  }

  return (
    <>
      <Box
        maxW='1200px' mx='auto' display={{ base: "block", md: "block" }} h={{ base: "301px", md: "425px" }}
        w='100%' my='20px'position='relative'
      >
        <ArrowLeft goToPrevious={goToPrevious} />
        <ArrowRight goToNext={goToNext} />

        {IMAGES.map((image, index) => (
          <Box
            key={index} position='absolute' w='inherit' h='100%'
            bgSize={{base: image.sizeMobile, md: image.sizeDesktop}}
            bgPosition={{base: image.positionMobile, md: image.positionDesktop}}
            bgRepeat='no-repeat' borderRadius={{ base: "0px", md: "10px" }}
            backgroundImage={`url(${image.url})`} opacity={currentImage === index ? "1" : "0"}
            transition='all 0.5s ease'
          ></Box>
        ))}

        {IMAGES.map((image, index) => {
          if (index === 0) {
            return <ContentBannerOne key={index} currentImage={currentImage} index={index}/>
          } else if (index === 1) {
            return <ContentBannerTwo key={index} currentImage={currentImage} index={index}/>
          } else {
            return <ContentBannerThree key={index} currentImage={currentImage} index={index}/>
          }
        })}

        <Box display='flex' gap={2} position='absolute' bottom='8px' left='49%'>
          {IMAGES.map((image, index) => (
            <Icon
              as={currentImage === index ? FaCircle : FaRegCircle}
              key={index} cursor='pointer' w='fit-content' fontSize='11px' color='brand.400'
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

const IMAGES = [
  {
    url: "/images/suculent.webp",
    positionDesktop: "0px -301px",
    positionMobile: "-40px -45px",
    sizeDesktop: "100%",
    sizeMobile: "136%",
  },
  {
    url: "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    positionDesktop: "0px -140px",
    positionMobile: "-70px -45px",
    sizeDesktop: "100%",
    sizeMobile: "136%",
  },
  {
    url: "https://images.unsplash.com/photo-1550254469-e77c18c9252b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    positionDesktop: "0px -301px",
    positionMobile: "-40px -45px",
    sizeDesktop: "100%",
    sizeMobile: "136%",
  },
];
