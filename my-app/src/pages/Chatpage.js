import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import WidthNormalIcon from '@mui/icons-material/WidthNormal';
import Slidenav from '../components/Slidenav'
import Chatslider from '../components/Chatslider';
import {Menu, MenuItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import Chatbox from '../components/Chatbox';

const ChatPage = () => {
    // State to toggle between light and dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const open = Boolean(anchorEl);

    const handleNewChatClick = () => {
        setIsBoxVisible((prev) => !prev); // Toggle the visibility
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Define light and dark themes
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#1976d2',
            },
        },
    });

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#90caf9',
            },
            background: {
                default: '#121212',
                paper: '#1e1e1e',
            },
        },
    });

    // Function to toggle theme mode
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    

    return ( 
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <AppBar position="fixed" sx={{ 
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: isDarkMode ? 'background.paper' : 'white', 
                boxShadow: 'none',
                borderBottom: '1px solid #ddd', 
                height: '64px',
                }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography 
                            variant="h6"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,                   
                                color: isDarkMode ? '#ffffff' : 'blue',
                                textDecoration: 'none',
                                }}
                        >
                            Icon
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,                   
                            color: isDarkMode ? '#ffffff' : '#2f3a4a',
                            textDecoration: 'none',
                            }}
                        >
                            MINDSPARK
                        </Typography>
                        <Tooltip title={isDrawerOpen ? "Close Slider" : "Open Slider"}>
                            <IconButton
                                onClick={toggleDrawer} 
                                sx={{
                                    height: '40px',
                                    width: '40px',
                                    border: '1px solid #c3cfe3', 
                                    borderRadius: '50%',  
                                    margin: '10px 0px',
                                    '&:hover': {
                                        backgroundColor: '#cacbcc',      
                                    },
                                }}
                            >
                                <WidthNormalIcon />

                            </IconButton>
                        </Tooltip>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Tooltip title="Search">
                                <IconButton 
                                    sx={{
                                        height: '40px',
                                        width: '40px',
                                        border: '1px solid #c3cfe3', 
                                        borderRadius: '50%',  
                                        margin: '10px',
                                        '&:hover': {
                                            backgroundColor: '#cacbcc',      
                                        },
                                    }}
                                >
                                <SearchIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Notification">
                                <IconButton
                                    sx={{
                                        height: '40px',
                                        width: '40px',
                                        border: '1px solid #c3cfe3', 
                                        borderRadius: '50%',  
                                        margin: '10px',
                                        '&:hover': {
                                            backgroundColor: '#cacbcc',      
                                        },
                                    }}
                                >
                                    <Badge badgeContent={17} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Language">
                            <IconButton
                                    sx={{
                                        height: '40px',
                                        width: '40px',
                                        border: '1px solid #c3cfe3', 
                                        borderRadius: '50%',  
                                        margin: '10px',
                                        '&:hover': {
                                            backgroundColor: '#cacbcc',      
                                        },
                                    }}
                                >
                                    <TranslateIcon />
                                </IconButton>
                            </Tooltip>
                            {/* Light Mode Button */}
                            <Tooltip title={isDarkMode ? "Light Mode" : "Dark Mode"}>
                                <IconButton
                                    onClick={toggleTheme}
                                    sx={{
                                        height: '40px',
                                        width: '40px',
                                        border: '1px solid #c3cfe3', 
                                        borderRadius: '50%',  
                                        margin: '10px',
                                        '&:hover': {
                                            backgroundColor: '#cacbcc',      
                                        },
                                    }}
                                >
                                    {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Profile">
                                <IconButton 
                                    onClick={handleClick}                       
                                    sx={{
                                        height: '40px',
                                        width: '40px',
                                        border: '3px solid #5574a6', 
                                        borderRadius: '50%',  
                                        margin: '10px',
                                        '&:hover': {
                                            backgroundColor: '#cacbcc',      
                                        },
                                    }}
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                    sx={{
                                        '& .MuiPaper-root': {
                                            boxShadow: 'none', 
                                            border: '1px solid #ccc', 
                                        },
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <SettingsIcon fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleClose} >
                                        <ListItemIcon>
                                            <UpgradeIcon fontSize="small" />
                                        </ListItemIcon>
                                        Upgrade Plan
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <LogoutIcon fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Tooltip>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{ display: 'flex', height: '100vh' }}>
                <Box>
                    <Slidenav open={isDrawerOpen} toggleDrawer={toggleDrawer} />
                </Box>
                <Chatbox/>

                <Box>
                    <Chatslider onNewChatClick={handleNewChatClick} />
                    <Container
                        maxWidth="sm"
                        component="main"
                        sx={{
                            flexGrow: 1,
                            padding: '100px 24px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',
                        }}
                    >
                        {/* Conditionally render the box */}
                        {isBoxVisible &&(
                            <Box
                                sx={{
                                    width: '300px',
                                    height: '200px',
                                    backgroundColor: '#f0f0f0',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <Typography variant="h6">New Chat Box</Typography>
                            </Box>
                        )}

                    </Container>
                </Box>
            </Box>
            

        </ThemeProvider>    
    );
}


export default ChatPage;