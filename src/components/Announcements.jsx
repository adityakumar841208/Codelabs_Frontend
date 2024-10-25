import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Announcements = () => {
    return (
        <>
            <div></div>
            <div className='fixed border-customBorder border-l-2 min-h-screen overflow-y-auto'>
                <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', color: 'white' }}>
                    Announcements & Updates
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Update 1: New features released!" sx={{ color: 'white' }} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Update 2: Scheduled maintenance on October 25." sx={{ color: 'white' }} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Announcement: New service providers added!" sx={{ color: 'white' }} />
                    </ListItem>
                </List>
            </div>
        </>
    );
};

export default Announcements;
