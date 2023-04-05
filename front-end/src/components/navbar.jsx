import {
    Button,
    Flex,
    VStack,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

//importan redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";

export const Navbar = () => {
    const { firstName, isAdmin } = useSelector(
        (state) => state.userSlice.value
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const onSignOut = () => {
        dispatch(logout());
        localStorage.removeItem("token");
        navigate("/login");
    };

    const adminPage = () => {
        if (isAdmin) {
            navigate("/admin");
        } else {
            alert("Restricted Access: Admin Only");
        }
    };

    return (
        <VStack
            justify="space-evenly"
            align="flex-end"
            shadow="base"
            bgColor="gray.50"
            w="100vw"
            h="16"
        >
            <Flex justify="space-evenly" align="center" mr="4">
                {token ? (
                    <>
                        <Menu>
                            <Button
                                as={MenuButton}
                                mr="2"
                                colorScheme="teal"
                                variant="solid"
                            >
                                Menu
                            </Button>
                            <MenuList>
                                <MenuItem onClick={() => navigate("/profile")}>
                                    Profile
                                </MenuItem>
                                <MenuItem>Setting</MenuItem>
                                <MenuItem onClick={adminPage}>Admin</MenuItem>
                                <MenuItem onClick={onSignOut}>
                                    Sign Out
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <Text as="b">Welcome, {firstName}</Text>
                    </>
                ) : (
                    <>
                        <Button
                            onClick={() => navigate("/login")}
                            rounded={"full"}
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                                bg: "blue.500",
                            }}
                            mr="2"
                        >
                            Login
                        </Button>
                        <Button
                            mr="2"
                            rounded={"full"}
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </Button>
                    </>
                )}
            </Flex>
        </VStack>
    );
};
