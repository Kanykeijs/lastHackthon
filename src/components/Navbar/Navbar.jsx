import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router";
import { Modal } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const navigate = useNavigate();
  const handleClose = () => setOpen(false);

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

  return (
    <AppBar
      id="mbar"
      sx={{ padding: "20px 36px", width: "100%", color: "black" }}
      position="static"
    >
      <Container maxWidth="100%">
        <Toolbar id="tbar" disableGutters>
          <img
            style={{ color: "blue" }}
            src="https://www.life-line.ru/local/templates/general/donate_redesign/img/new-design/logo-ll2.svg"
            alt=""
          />
          <Box>
            <Box id="bbar">
              <Typography
                id="tpnb"
                variant="h6"
                noWrap
                component="a"
                href="/funde"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  //   letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ????????
              </Typography>
              <Typography
                id="tpnb"
                variant="h6"
                noWrap
                component="a"
                href="/medicine"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  //   letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ????????????????
              </Typography>
              <Typography
                id="tpnb"
                variant="h6"
                noWrap
                component="a"
                href="/children"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  //   letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ????????
              </Typography>
              <Typography
                id="tpnb"
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  //   letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {" "}
                <Button
                  sx={{ color: "white", marginTop: "5px" }}
                  onClick={handleOpen}
                >
                  ????????????????
                </Button>
              </Typography>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    ...style,
                    width: 400,
                    borderRadius: 3,
                    borderColor: "#fff",
                  }}
                >
                  <h2 id="parent-modal-title" style={{ textAlign: "center" }}>
                    ???????? ????????????????
                  </h2>
                  <p id="parent-modal-description">
                    ?????? ??????????: ????.?????????????????????? 29{" "}
                  </p>
                  <p id="parent-modal-description">??: 0705-33-71-82 </p>
                  <p id="parent-modal-description">??: 0220-15-99-94 </p>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "150px" }}
                  >
                    <Button
                      color="success"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <LocalPhoneIcon />
                      <a
                        href="tel:0705-33-71-82"
                        style={{ textDecoration: "none", color: "green" }}
                      >
                        ??????????????????
                      </a>
                    </Button>
                    <Button color="error" onClick={handleClose}>
                      ??????????????
                    </Button>
                  </Box>
                </Box>
              </Modal>

              <Typography
                id="tpnb"
                variant="h6"
                noWrap
                component="a"
                href="/funde"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  //   letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ?????????? ?????? ??????????????????
              </Typography>
              <Typography
                id="tpnb"
                variant="h6"
                noWrap
                component="a"
                href="/funde"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  //   letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ?????? ?????? ????????????????????????
              </Typography>
            </Box>
            <Box id="nbtns">
              <Button id="nbbtn" sx={{ color: "#007aff" }}>
                ???????? ????????????
              </Button>
              <Button id="nbbtn2" sx={{ marginLeft: "17px" }}>
                ?????????? ????????????
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
