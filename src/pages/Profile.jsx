import { Container, Text, VStack, Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const userPhotos = [
  { id: 1, src: "https://via.placeholder.com/300", alt: "User Photo 1" },
  { id: 2, src: "https://via.placeholder.com/300", alt: "User Photo 2" },
];

const Profile = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">My Profile</Text>
        {userPhotos.map(photo => (
          <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
            <Image src={photo.src} alt={photo.alt} />
          </Box>
        ))}
        <Box mt={4}>
          <Button as={Link} to="/" colorScheme="teal">Back to Feed</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Profile;