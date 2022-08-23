import { useRef } from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard/ProductCard";
import ArrowLeft from "../Arrows/ArrowLeft";
import ArrowRight from "../Arrows/ArrowRight";

export default function Products() {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  function goToNextProduct() {
    sliderRef.current.slickNext();
  }

  function goToPrevProduct() {
    sliderRef.current.slickPrev();
  }

  return (
    <>
      <Box
        maxW='1200px'
        mx='auto'
        mt='45px'
        mb={{ base: "50px", md: "100px" }}
        position='relative'
      >
        <Slider {...settings} ref={sliderRef}>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
        <ArrowLeft goToPrevious={goToPrevProduct} />
        <ArrowRight goToNext={goToNextProduct} />
      </Box>
    </>
  );
}

const PRODUCTS = [
  {
    id: 0,
    title: "Juego de Suculentas",
    image:
      "https://images.unsplash.com/photo-1621274220348-41dc235ff439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 12.9,
    currency: "$",
    discount: "10",
  },
  {
    id: 1,
    title: "Juego de Cactus",
    image:
      "https://images.unsplash.com/photo-1621274220348-41dc235ff439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 12.9,
    currency: "$",
    discount: "10",
  },
  {
    id: 2,
    title: "Juego de Chifleras",
    image:
      "https://images.unsplash.com/photo-1621274220348-41dc235ff439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 12.9,
    currency: "$",
    discount: "10",
  },
  {
    id: 3,
    title: "Juego de Girasoles",
    image:
      "https://images.unsplash.com/photo-1621274220348-41dc235ff439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 12.9,
    currency: "$",
    discount: "10",
  },
  {
    id: 4,
    title: "Juego de macetas",
    image:
      "https://images.unsplash.com/photo-1621274220348-41dc235ff439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 12.9,
    currency: "$",
    discount: "10",
  },
  {
    id: 5,
    title: "Macetas de madera",
    image:
      "https://images.unsplash.com/photo-1621274220348-41dc235ff439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 12.9,
    currency: "$",
    discount: "10",
  },
  {
    id: 6,
    title: "Macetas de plástico",
    image:
      "https://images.unsplash.com/photo-1621274220348-41dc235ff439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 12.9,
    currency: "$",
    discount: "10",
  },
  {
    id: 7,
    title: "Tierras fértiles",
    image:
      "https://images.unsplash.com/photo-1621274220348-41dc235ff439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 12.9,
    currency: "$",
    discount: "10",
  },
];
