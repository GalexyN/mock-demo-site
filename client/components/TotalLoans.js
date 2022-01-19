import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function TotalLoans() {
  return (
    <React.Fragment>
      <Title>Total Loan Amounts</Title>
      <Typography component="p" variant="h4">
        $5,247,982,024.98
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        YTD
      </Typography>
      <Typography component="p" variant="h4">
        $452,560,348.12
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        MTD
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View loans
        </Link>
      </div>
    </React.Fragment>
  );
}
