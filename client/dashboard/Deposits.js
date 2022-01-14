import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Total Loans</Title>
      <Typography component="p" variant="h4">
        $45,247,982,024.98
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 12 January, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View loans
        </Link>
      </div>
    </React.Fragment>
  );
}
