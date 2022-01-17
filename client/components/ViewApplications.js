import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import ViewApplicationModal from './ViewApplicationModal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function preventDefault(event) {
    event.preventDefault();
}

const style = {
    // position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    height: '70%',
    bgcolor: '#fff',
    border: '2px solid #2b6777',
    boxShadow: 24,
    p: 4,
};

export default function ViewApplications() {
    return (
        <React.Fragment>
            <Title>View Your Loan Applications</Title>
            <Typography component="p" variant="h4">
                Application Lookup
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                utilizes VerifyIQ
            </Typography>
            <div>
                {/* <ViewApplicationModal /> */}
                <Grid container align="center" rowSpacing="10px">
                    <Grid item xs={12}>
                        <TextField id="standard-basic" label="Application ID" variant="standard" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained">Find App</Button>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}
