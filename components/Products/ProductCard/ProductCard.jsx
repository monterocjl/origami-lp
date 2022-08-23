import { Box, Image } from "@chakra-ui/react";

export default function ProductCard({ product }) {
  return (
    <>
      <Box
        position='relative'
        w={{ base: "162px", md: "273px" }}
        h={{ base: "215px", md: "354px" }}
        borderRadius='10px'
        bg='white'
        mx={{ base: 5, md: 3 }}
        my={2}
        p={{ base: "7px", md: "12px" }}
        boxShadow='3px 3px 10px -4px rgb(0 0 0 / 15%)'
      >
        <Box
          position='absolute'
          top={{ base: "13px", md: "19px" }}
          right={{ base: "13px", md: "19px" }}
          w='fit-content'
          px={2}
          bg='brand.400'
          borderRadius='50px'
          fontSize='14px'
          fontWeight='bold'
          color='white'
        >
          {product.discount}%
        </Box>
        <Image
          w='100%'
          borderRadius='10px'
          src={product.image}
          alt={product.title}
        />
        <Box
          mt={{ base: 1, md: 2 }}
          mb={0}
          fontSize={{ base: "15px", md: "19px" }}
          fontWeight='500'
        >
          {product.title}
        </Box>
        <Box fontSize={{ base: "17px", md: "22px" }} fontWeight='bold'>
          {product.currency} {product.price}
        </Box>
      </Box>
    </>
  );
}
