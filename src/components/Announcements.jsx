import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Announcements = () => {
    return (
        <>
            <div></div>
            <div className='sticky top-16 shadow-xl overflow-y-auto rounded-xl bg-gradient-to-tr from-white via-pink-100 to-slate-200 m-2'>
                <Typography variant="h6" sx={{ mb: 2,mt:2, textAlign: 'center', color: 'black' }}>
                    Announcements & Updates
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Update 1: New features released!" sx={{ color: 'black' }} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Update 2: Scheduled maintenance on October 25." sx={{ color: 'black' }} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Announcement: New service providers added!" sx={{ color: 'black' }} />
                    </ListItem>
                </List>
            </div>
        </>
    );
};

export default Announcements;
