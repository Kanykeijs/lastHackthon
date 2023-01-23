import React, {useAuth} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
  


const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    // console.log({user});
    return (
        
        <AppBar
       
        id="mbar"
      sx={{ padding: "20px 36px", width: "100%" }}
      position="static"
    >
      <Container maxWidth="100%">
        <Toolbar id="tbar" disableGutters>
          <img
            src="https://www.life-line.ru/local/templates/general/redesign_v2/img/new-design/logo-ll.svg"
            alt=""
          />
          <Box>
        
            <Box id="bbar">
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/funde"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Фонд
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/medicine"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Медицина
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/children"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Дети
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Контакты
              </Typography>
            </Box>
            <Box id="nbtns">
              <Button id="nbbtn" sx={{ color: "#007aff" }}>
                Хочу помочь
              </Button>
              <Button id="nbbtn2" sx={{ marginLeft: "17px" }}>
                Нужна помощь
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;