import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

export default function NewUsers() {
    return (
        <React.Fragment>
            <Title>User Growth</Title>
            <Typography component="p" variant="h4">
                381.42%
            </Typography>
            <Typography color="text.secondary" sx={{flex: 1}}>
                YTD
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View New Users
                </Link>
            </div>
        </React.Fragment>
    );
}
