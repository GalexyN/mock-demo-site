import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Title from './Title';
import VerifyIQOpen from './VerifyIQOpen';
import VerifyIQSettings from './VerifyIQSettings';
import VerifyIQ from '@informed-iq/verify-iq-sdk';

function preventDefault(event) {
    event.preventDefault();
}

export default function ViewApplications() {
    const [applicationId, setApplicationId] = React.useState('');
    const [verifyIQAuthToken, setVerifyIQAuthToken] = React.useState('');
    const [verifyIQEnvironment, setVerifyIQEnvironment] = React.useState('');
    const [verifyIQIIQURL, setVerifyIQIIQURL] = React.useState('');
    const [verifyIQACURL, setVerifyIQACURL] = React.useState('');
    const [verifyIQApplicant, setVerifyIQApplicant] = React.useState('');
    const [verifyIQDocumentModalOption, setVerifyIQDocumentModalOption] = React.useState('');
    const [verifyIQStipulation, setVerifyIQStipulation] = React.useState('');
    const [verifyIQUploadWebhook, setVerifyIQUploadWebhook] = React.useState('');
    const [verifyIQCollectWebhook, setVerifyIQCollectWebhook] = React.useState('');
    const [verifyIQJWT, setVerifyIQJWT] = React.useState('');
    const [viq, setViq] = React.useState({});

    const handleVerifiyIQAuthTokenChange = (event) => {
        setVerifyIQAuthToken(event.target.value);
    }

    const handleVerifyIQEnvironmentChange = (event) => {
        setVerifyIQEnvironment(event.target.value);
    }

    const handleApplicationIdChange = (event) => {
        setApplicationId(event.target.value);
    }

    const handleVerifyIQACURLChange = (event) => {
        setVerifyIQACURL(event.target.value);
    }

    const handleVerifyIQIIQURLChange = (event) => {
        setVerifyIQIIQURL(event.target.value);
    }

    const handleVerifyIQApplicantChange = (event) => {
        setVerifyIQApplicant(event.target.value);

    }
    const handleVerifyIQDocumentModalOptionChange = (event) => {
        setVerifyIQDocumentModalOption(event.target.value);
    }

    const handleVerifyIQStipulationChange = (event) => {
        setVerifyIQStipulation(event.target.value);
    }
    const handleVerifyIQUploadWebhookChange = (event) => {
        setVerifyIQUploadWebhook(event.target.value);
    }
    const handleVerifyIQCollectWebhookChange = (event) => {
        setVerifyIQCollectWebhook(event.target.value);
    }
    const handleVerifyIQJWTChange = (event) => {
        setVerifyIQJWT(event.target.value);
    }

    const initVerifyIQ = () => {
        let tmp = new VerifyIQ({
            authToken: verifyIQAuthToken,
            environment: verifyIQEnvironment === 'Production' ? VerifyIQ.Production : VerifyIQ.Staging,
            actionCallbackWebhookUrl: verifyIQACURL,
            url: verifyIQIIQURL,
            onPass: function (actionObject, reason) {
                /* Stipulation action handler */
                console.log('Pass', actionObject, reason);
            },

            onDocumentRequestedViaSms: function (stipObjects) {
                console.log('onRequestDocumentsViaSms', stipObjects);
            },

            onIncomplete: function (actionObject, reason) {
                /* Stipulation action handler */
                console.log('Incomplete', actionObject, reason);
            },

            onWaive: function (actionObject, reason) {
                /* Stipulation action handler */
                console.log('Waive', actionObject, reason);
            },
        });
        setViq(tmp);
    }

    return (
        <React.Fragment>
            <div style={{
                position: 'relative',
            }}>
                <VerifyIQSettings
                    initVerifyIQ={initVerifyIQ}
                    verifyIQACURL={verifyIQACURL}
                    verifyIQIIQURL={verifyIQIIQURL}
                    verifyIQApplicant={verifyIQApplicant}
                    verifyIQEnvironment={verifyIQEnvironment}
                    verifyIQDocumentModalOption={verifyIQDocumentModalOption}
                    verifyIQStipulation={verifyIQStipulation}
                    verifyIQUploadWebhook={verifyIQUploadWebhook}
                    verifyIQCollectWebhook={verifyIQCollectWebhook}
                    verifyIQJWT={verifyIQJWT}
                    handleVerifyIQAuthTokenChange={handleVerifiyIQAuthTokenChange}
                    handleVerifyIQEnvironmentChange={handleVerifyIQEnvironmentChange}
                    handleVerifyIQACURLChange={handleVerifyIQACURLChange}
                    handleVerifyIQIIQURLChange={handleVerifyIQIIQURLChange}
                    handleVerifyIQApplicantChange={handleVerifyIQApplicantChange}
                    handleVerifyIQDocumentModalOptionChange={handleVerifyIQDocumentModalOptionChange}
                    handleVerifyIQStipulationChange={handleVerifyIQStipulationChange}
                    handleVerifyIQUploadWebhookChange={handleVerifyIQUploadWebhookChange}
                    handleVerifyIQCollectWebhookChange={handleVerifyIQCollectWebhookChange}
                    handleVerifyIQJWTChange={handleVerifyIQJWTChange}
                />
                <Title>
                    Application Lookup
                </Title>
                <Typography color="text.secondary" sx={{ paddingBottom: '20px' }}>
                    utilizes VerifyIQ
                </Typography>
                <div>
                    <Grid container align="center" rowSpacing="20px">
                        <Grid item xs={12}>
                            <TextField
                                id="standard-basic"
                                label="Application ID"
                                onChange={handleApplicationIdChange}
                                variant="standard"
                                helperText="Please enter application id"
                                sx={{ label: { color: "#2b6777" } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <VerifyIQOpen
                                applicationId={applicationId}
                                viq={viq}
                                verifyIQApplicant={verifyIQApplicant}
                                verifyIQDocumentModalOption={verifyIQDocumentModalOption}
                                verifyIQStipulation={verifyIQStipulation}
                                verifyIQUploadWebhook={verifyIQUploadWebhook}
                                verifyIQCollectWebhook={verifyIQCollectWebhook}
                                verifyIQJWT={verifyIQJWT}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}
