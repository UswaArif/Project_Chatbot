import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

const Slidenav = ({ open, toggleDrawer }) => {
    const activeIndex = 0;

    return (
        <Drawer anchor="left" open={open} onClose={toggleDrawer}
            variant="persistent"
            >
            <List
                sx={{
                    marginTop: '90px',
                    width: '250px',
                    marginLeft: '22px',
                    marginRight: '22px',
                     
                }}
            >
                {['Home', 'Community Feed', 'Manage Subcription'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton
                    sx={{
                        '&:hover': {
                          backgroundColor: '#e3f4fc',
                          borderRadius: '5px',
                          color: '#028ed9',
                        },                       
                        '&:hover .MuiListItemIcon-root': {
                            color: '#028ed9', 
                        },
                      }}>
                    <ListItemIcon
                    >
                        {index === 0 ? (
                            <HomeOutlinedIcon />
                        ) : index === 1 ? (
                            <GroupsOutlinedIcon />
                        ) : (
                            <BusinessCenterOutlinedIcon />
                        )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Divider 
                sx={{
                    margin: '10px 25px'
                }}
            />
            <List
                sx={{
                    width: '250px',
                    marginLeft: '22px',
                    marginRight: '22px',
                }}>
                {['AI Chat Bot', 'Image Generator'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton
                    sx={{
                        '&:hover': {
                          backgroundColor: '#e3f4fc',
                          color: '#028ed9',
                          borderRadius: '5px',
                        },
                        '&:hover .MuiListItemIcon-root': {
                            color: '#028ed9',                            
                        },
                        backgroundColor: activeIndex === index ? '#e3f4fc' : '',
                        color: activeIndex === index ? '#028ed9' : 'inherit', 
                        borderRadius: activeIndex === index ? '5px' : 'inherit',
                        '& .MuiListItemIcon-root': {
                            color: activeIndex === index ? '#028ed9' : 'inherit', 
                        },
                      }}
                      >
                    <ListItemIcon>
                        {index % 2 === 0 ? <ChatOutlinedIcon /> : <ImageOutlinedIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Slidenav;
