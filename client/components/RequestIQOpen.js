import React from 'react';
// import VerifyIQ from '@informed-iq/verify-iq-sdk';
import { Button, Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '65%',
    left: '65%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    height: '95%',
};

const RequestIQOpen = ({
    viq,
    applicationId,
}) => {

    const precheckedDocumentsDefault = {
        // the following is an example only
        income: [
            { paystub: 3 },
            { bankStatement: 2 },
            'w2', // this would default to qty of 1
        ],
        insurance: ['insuranceIDCard', 'declarationsPage'],
    };
    const handleRequestIQOnClick = async () => {
        await setOpen(true);
        let options = {
            htmlElement: document.getElementById("request-iq-modal"),
            applicationId: applicationId,
            collectedDocumentWebhookUrl: "https://acceptance.driveinformed.com",
            precheckedDocuments: precheckedDocumentsDefault
        }
        await viq.renderRequestIq(options);
    }
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                id="verify-iq-find-app-button"
                onClick={handleRequestIQOnClick}
                sx={
                    {
                        backgroundColor: "#2b6777",
                        "&hover": { cursor: "pointer" }
                    }
                }
                variant="contained">
                Request Docs
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} id="request-iq-modal">
                    <CloseIcon onClick={handleClose} sx={
                        {
                            position: "absolute",
                            left: "-21px",
                            top: "-21px",
                            border: "2px solid #fff",
                            borderRadius: "50%",
                            color: "#fff",
                            "&:hover": {
                                cursor: "pointer"
                            }
                        }
                    }
                    />
                </Box>
            </Modal>
        </div >
    );
}

export default RequestIQOpen;



"https://acmefinancial.informed.iq/request-docs/AN_SHOWNTELL_001?sdk=true&applicant=undefined&stipulation=undefined&sdkConfig=%7B%22collectedDocumentWebhookUrl%22%3A%22https%3A%2F%2Fdemo.informed.iq%2F10imasv1%22%2C%22precheckedDocuments%22%3A%7B%22income%22%3A%5B%7B%22paystub%22%3A3%7D%2C%7B%22bankStatement%22%3A2%7D%2C%22w2%22%5D%2C%22insurance%22%3A%5B%22insuranceIDCard%22%2C%22declarationsPage%22%5D%7D%7D"