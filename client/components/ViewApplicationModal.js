import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

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

export default function ViewApplicationModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Find Application</Button>
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

                        {/* <Grid item xs={12}>
                            <TextField id="standard-basic" label="Standard" variant="standard" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" label="Standard" variant="standard" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="standard-basic" label="Standard" variant="standard" />
                        </Grid> */}
                    </Grid>
                </Box>

            </Modal>
        </div>
    );
}