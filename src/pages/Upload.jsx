import { Container, Text, VStack, Input, Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log("File uploaded:", file);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">Upload Photo</Text>
        <Input type="file" onChange={handleFileChange} />
        <Button colorScheme="teal" onClick={handleUpload}>Upload</Button>
        <Box mt={4}>
          <Button as={Link} to="/" colorScheme="teal">Back to Feed</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Upload;