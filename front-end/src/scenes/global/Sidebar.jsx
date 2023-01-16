import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import BackupTableOutlinedIcon from "@mui/icons-material/BackupTableOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${colors.blueAccent[600]} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colors.blueAccent[300]} !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[200]}>
                  Project Title
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="20px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile"
                  width="100px"
                  height="100px"
                  src={`https://images.pexels.com/photos/2340254/pexels-photo-2340254.jpeg`}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    backgroundSize: "cover",
                    border: "3px solid",
                    borderColor: `${colors.grey[200]}`,
                  }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  mt="10px"
                  color={colors.grey[200]}
                >
                  Kielo Bash
                </Typography>
                <Typography
                  variant="h5"
                  color={colors.blueAccent[400]}
                  mt="3px"
                >
                  CS-ST Major
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Box marginBottom="10px"></Box>
            <Typography
              variant="h7"
              sx={{ m: isCollapsed ? "15px 0 5px 12px" : "15px 0 5px 28px" }}
              color={colors.grey[300]}
            >
              Inventory
            </Typography>
            <Item
              title="Records"
              to="/records"
              icon={<DescriptionOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Total"
              to="/total"
              icon={<BackupTableOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add"
              to="/inventoryAdd"
              icon={<AddCircleOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sold"
              to="/inventorySold"
              icon={<RemoveCircleOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Box marginBottom="10px"></Box>
            <Typography
              variant="h7"
              sx={{ m: isCollapsed ? "15px 0 5px 22px" : "15px 0 5px 28px" }}
              color={colors.grey[300]}
            >
              Sales
            </Typography>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
