import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Protection() {
    const navigate = useNavigate();
    return (
        <div>
            <Box textAlign="center" py={10} px={6}>
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, blue.400, blue.600)"
                    backgroundClip="text"
                >
                    404
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                    The page you're looking for does not seem to exist
                </Text>
                <Text color={"gray.500"} mb={6}>
                    Please login to access this page
                </Text>

                <Button
                    onClick={() => navigate("/login")}
                    colorScheme="blue"
                    bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
                    color="white"
                    variant="solid"
                >
                    Go to Login
                </Button>
            </Box>
        </div>
    );
}

export default Protection;
