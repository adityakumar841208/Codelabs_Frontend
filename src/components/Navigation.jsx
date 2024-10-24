import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Navigation = () => {
    return (
        <> 
            {/* <div></div> */}
            <div className='fixed border-customBorder border-r-2 min-h-screen w-56 h-full'>
                <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', color: 'white' }}>
                    Navigation
                </Typography>
                <List>
                    <ListItem button component="li">
                        <ListItemText primary="User Profile" sx={{ color: 'white' }} />
                    </ListItem>
                    <ListItem button component="li">
                        <ListItemText primary="Services" sx={{ color: 'white' }} />
                    </ListItem>
                    <ListItem button component="li">
                        <ListItemText primary="Feedback" sx={{ color: 'white' }} />
                    </ListItem>
                    <ListItem button component="li">
                        <ListItemText primary="Help" sx={{ color: 'white' }} />
                    </ListItem>
                    <ListItem button component="li">
                        <ListItemText primary="Logout" sx={{ color: 'white' }} />
                    </ListItem>
                </List>
            </div>
        </>
    );
};

export default Navigation;
