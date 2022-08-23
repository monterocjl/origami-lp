import { Box } from "@chakra-ui/react";
import PlantCard from "./PlantCard/PlantCard";

export default function PlantsTypes() {
  return (
    <>
      <Box
        maxW='1200px'
        mx='auto'
        mt='35px'
        px={{ base: "10px", md: "0px" }}
        display='flex'
        justifyContent='space-between'
        flexDir='row'
        flexWrap='wrap'
        gap='21px'
      >
        {TYPES_OF_PLANTS.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </Box>
    </>
  );
}

const TYPES_OF_PLANTS = [
  {
    id: 0,
    title: "Amplia variedad de Cactus en distintas presentaciones",
    image: "/icons/cactus.svg",
  },
  {
    id: 1,
    title: "Amplia variedad de Enrededaderas en distintas presentaciones",
    image: "/icons/spider-plant.svg",
  },
  {
    id: 2,
    title: "Amplia variedad de plantas decorativas",
    image: "/icons/plant.svg",
  },
];
