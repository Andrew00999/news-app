import * as React from "react";
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";

const navItems = ["About", "Contact"];

const Header = () => {
    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    News feed
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                    News feed
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    {navItems.map((item) => (
                        <Button key={item} sx={{ color: "#fff" }}>
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
