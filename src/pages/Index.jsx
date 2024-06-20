import { Container, Text, VStack, Box, Image, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const photos = [
  { id: 1, src: "https://via.placeholder.com/300", alt: "Photo 1" },
  { id: 2, src: "https://via.placeholder.com/300", alt: "Photo 2" },
  { id: 3, src: "https://via.placeholder.com/300", alt: "Photo 3" },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">Photo Feed</Text>
        {photos.map(photo => (
          <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
            <Image src={photo.src} alt={photo.alt} />
          </Box>
        ))}
        <Flex justifyContent="space-between" width="100%" mt={4}>
          <Button as={Link} to="/upload" colorScheme="teal">Upload Photo</Button>
          <Button as={Link} to="/profile" colorScheme="teal">Profile</Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;