import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import ViewApplicationModal from './ViewApplicationModal';

function preventDefault(event) {
    event.preventDefault();
}

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
                <ViewApplicationModal />
            </div>
        </React.Fragment>
    );
}
