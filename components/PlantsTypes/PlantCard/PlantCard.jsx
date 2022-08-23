import { Box, Divider, Image } from "@chakra-ui/react";

export default function PlantCard({ plant }) {
  return (
    <>
      <Box
        display='flex'
        bg='brand.200'
        w={{ base: "100%", md: "362px" }}
        h='109px'
        borderRadius='10px'
        p={2}
        alignItems='center'
        gap={2}
      >
        <Image src={plant.image} w='67px' alt={plant.title} />
        <Box display='flex' alignItems='center' gap={4}>
          <Divider
            orientation='vertical'
            h='62px'
            borderLeftWidth='3px'
            opacity='1'
            borderColor='brand.300'
          />
          <Box fontSize='15px' fontWeight='500'>
            {plant.title}
          </Box>
        </Box>
      </Box>
    </>
  );
}
