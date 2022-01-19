import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';

function preventDefault(event) {
    event.preventDefault();
}

export default function UserActivities() {
    return (
        <React.Fragment>
            <Title>User Quick Links</Title>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ flexGrow: 1 }}>
                <Grid item xs={6}>
                    <Button sx={{ backgroundColor: "#2b6777", width: '100%', display: 'flex', flexDirection: 'column' }} variant="contained"><LibraryBooksIcon />Log Lead</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button sx={{ backgroundColor: "#2b6777", width: '100%', display: 'flex', flexDirection: 'column' }} variant="contained"><ContactPhoneIcon />Log Call</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button sx={{ backgroundColor: "#2b6777", width: '100%', display: 'flex', flexDirection: 'column' }} variant="contained"><EditIcon />Update Info</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button sx={{ backgroundColor: "#2b6777", width: '100%', display: 'flex', flexDirection: 'column' }} variant="contained"><InfoIcon />View Info</Button>
                </Grid>
            </Grid>
        </React.Fragment >
    );
}
