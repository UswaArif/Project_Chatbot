import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import WidthNormalIcon from '@mui/icons-material/WidthNormal';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import IosShareIcon from '@mui/icons-material/IosShare';import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Chatslider = ({ onNewChatClick }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    // Toggle the drawer open/close
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }; 

    const chatList = [
        { titles: ['Chat with Alice', 'Chat with Bob'], date: '2024-12-10' },
        { titles: ['Chat with Carol'], date: '2024-12-11' },
        { titles: ['Chat with Dave', 'Chat with Eve'], date: '2024-7-12' },
        { titles: ['Chat with Dave', 'Chat with Eve'], date: '2024-5-12' },
        { titles: ['Chat with Dave', 'Chat with Eve'], date: '2024-8-12' },
        { titles: ['Chat with Dave', 'Chat with Eve'], date: '2024-9-12' },
        { titles: ['Chat with Dave', 'Chat with Eve'], date: '2024-12-12' },
    ];

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Drawer anchor="right" variant="permanent" open={isDrawerOpen} 
            sx={{
                width: isDrawerOpen ? 300 : 70,  
                '& .MuiDrawer-paper': {
                    width: isDrawerOpen ? 300 : 70,
                    transition: 'width 0.6s',  
                    boxSizing: 'border-box',
                    display: 'flex',  
                    overflowX: 'hidden',
                    whiteSpace: 'nowrap',                   
                },
            }}
        >
            <Tooltip title={isDrawerOpen ? "Close Slider" : "Open Slider"}>
                <IconButton
                    onClick={toggleDrawer}
                    sx={{
                        height: '40px',
                        width: '40px',
                        border: '1px solid #c3cfe3', 
                        borderRadius: '50%',  
                        margin: '80px 20px 0px',
                        '&:hover': {
                            backgroundColor: '#cacbcc',      
                        },
                    }}
                >
                    <WidthNormalIcon />
                </IconButton>
            </Tooltip>
            {isDrawerOpen && (
                <Button
                    variant="outlined"
                    onClick={onNewChatClick}
                    sx={{
                        margin: '20px 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        border: '1px solid', 
                        padding: '6px 16px',
                        borderColor: '#d9dbdb',
                        color: 'inherit'
                    }}
                    endIcon={<ChatOutlinedIcon />}
                >
                    New Chat
                </Button>
            )}

            {/* When the drawer is closed, only show the icon */}
            {!isDrawerOpen && (
                <Tooltip title='New Chat'>
                    <IconButton
                    
                    sx={{
                        height: '40px',
                        width: '40px',
                        border: '1px solid #c3cfe3', 
                        borderRadius: '50%',  
                        margin: '20px 20px 0px',
                        '&:hover': {
                            backgroundColor: '#cacbcc',      
                        },
                    }}
                >
                    <ChatOutlinedIcon />
                </IconButton>
                </Tooltip>               
            )}

            {/* Chat List with Date and Titles Displayed Vertically */}
            {isDrawerOpen && (
                <List 
                    sx={{ 
                        padding: '0px 20px 0px', 
                        width: '300px',
                        overflowY: 'auto',  
                    }}
                >
                    {chatList.map((chat, index) => (
                        <ListItem key={index} disablePadding sx={{ }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <ListItemText
                                    primary={chat.date}
                                    sx={{
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                        marginLeft: '10px',
                                        fontWeight: 'bold',
                                        fontSize: '12px',
                                        color: '#028ed9',
                                    }}
                                />

                                {chat.titles.map((title, idx) => (
                                    <ListItem key={idx} disablePadding>
                                        <Box
                                            //onClick={() => handleClick(title)} // If needed, add your click handler here
                                            sx={{
                                                width: '240px',
                                                padding: '5px 10px',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',  
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    backgroundColor: '#e3f4fc',
                                                    borderRadius: '5px'
                                                },
                                                transition: 'background-color 0.3s', 
                                            }}
                                        >
                                            <ListItemText primary={title} sx={{ fontSize: '10px' }} />
                                            <ListItemIcon
                                                onClick={handleClick} 
                                                sx={{ minWidth: 'unset', marginRight: '10px', display: 'flex', alignItems: 'center' }}
                                            >
                                                <MoreHorizIcon sx={{ fontSize: '24px' }} />
                                            </ListItemIcon>
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
                                                        <IosShareIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    Share
                                                </MenuItem>
                                                <MenuItem onClick={handleClose} >
                                                    <ListItemIcon>
                                                        <EditIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    Rename
                                                </MenuItem>
                                                <MenuItem onClick={handleClose} sx={{ color: '#f44336' }}>
                                                    <ListItemIcon>
                                                        <DeleteIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    Delete
                                                </MenuItem>
                                            </Menu>
                                        </Box>
                                    </ListItem>
                                ))}

                            </div>
                        </ListItem>
                    ))}
                </List>
            )}   
        </Drawer>
    );
};

export default Chatslider;