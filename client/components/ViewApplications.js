import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import ViewApplicationModal from './ViewApplicationModal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

function preventDefault(event) {
    event.preventDefault();
}

const style = {
    position: 'absolute',
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            {/* <Title>View Your Loan Applications</Title> */}
            <Typography component="p" variant="h4">
                Application Lookup
            </Typography>
            <Typography color="text.secondary" sx={{paddingBottom: '20px'}}>
                utilizes VerifyIQ
            </Typography>
            <div>
                {/* <ViewApplicationModal /> */}
                <Grid container align="center" rowSpacing="20px">
                    <Grid item xs={12}>
                        <TextField id="standard-basic" label="Application ID" variant="standard" helperText="Please enter application id" sx={{ label: { color: "#2b6777" }}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleOpen} sx={{ backgroundColor: "#2b6777"}} variant="contained">Find App</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box
                                component="form"
                                sx={style}
                                noValidate
                                autoComplete="off"
                            >
                                <Typography id="modal-modal-title" variant="h6" component="h2" >
                                    Enter your Application Information
                                </Typography>
                                <Grid container align="center">
                                    <Grid item xs={12}>
                                        <TextField id="standard-basic" label="Application ID" variant="standard" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained">Find App</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Modal>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}
