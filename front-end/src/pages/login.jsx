import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//importan redux
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const url = "http://localhost:2000/auth/login";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = async () => {
        try {
            const data = {
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
            };

            const result = await axios.post(url, data);

            console.log(result.data.data);

            dispatch(
                login({
                    firstName: result.data.data.firstName,
                    lastName: result.data.data.lastName,
                    email: result.data.data.email,
                    isAdmin: result.data.data.isAdmin,
                })
            );

            //untuk mereset form
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";

            //akan menerima token saat login
            localStorage.setItem("token", result.data.token);

            //memberikan alert ketika berhasil login
            alert(result.data.message);

            //setelah menerima token akan di navigate ke home
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } catch (err) {
            console.log(err);

            //memberikan alert error ketika gagal login
            alert(err.response.data.message);
        }
    };

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                align={"start"}
                                justify={"space-between"}
                            >
                                <Checkbox>Remember me</Checkbox>
                                <Link
                                    onClick={() => navigate("/")}
                                    color={"blue.400"}
                                >
                                    Back to home
                                </Link>
                            </Stack>
                            <Button
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                                onClick={onLogin}
                            >
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};
