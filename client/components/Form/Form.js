import React from 'react';

const Form = () => {
    return (
        <div id="verify-iq-root">
            <div id="form">
                <div id="buttons">
                    <h3 class="heading">View your verifications by selecting the options below</h3>
                    <div class="group mb-30">
                        <input type="text" id="applicationId" class="select-text" required />
                        <span class="select-highlight"></span>
                        <span class="select-bar"></span>
                        <label class="select-label">Enter Application ID here...</label>
                    </div>
                    <div class="select group mb-30">
                        <select id="applicantType" class="select-text" required>
                            <option value="" disabled selected></option>
                        </select>
                        <span class="select-highlight"></span>
                        <span class="select-bar"></span>
                        <label class="select-label">Choose Applicant...</label>
                    </div>
                    <div class="select group mb-30">
                        <select id="stipulationType" class="select-text" required>
                            <option value="" disabled selected></option>
                        </select>
                        <span class="select-highlight"></span>
                        <span class="select-bar"></span>
                        <label class="select-label">Choose Stipulation...</label>
                    </div>
                    <div class="group mb-30">
                        <input type="text" id="collectedDocumentWebhookUrl" class="select-text" />
                        <label class="select-label">Enter collectedDocumentWebhookUrl here...</label>
                    </div>
                    <div class="group mb-30">
                        <input type="text" id="uploadedDocumentWebhookUrl" class="select-text" />
                        <label class="select-label">Enter uploadedDocumentWebhookUrl here...</label>
                    </div>
                    <div class="select group mb-30">
                        <select id="documentModalOptions" class="select-text">
                            <option value="" disabled selected></option>
                        </select>
                        <span class="select-highlight"></span>
                        <span class="select-bar"></span>
                        <label class="select-label">Choose Documents Modal Option...</label>
                    </div>
                    <div class="group mb-30">
                        <textarea type="text" id="precheckedDocuments" class="select-text"></textarea>
                        <label class="select-label">Enter precheckedDocuments here...</label>
                    </div>
                    <div class="group mb-30">
                        <input type="text" id="jwtToken" class="select-text" required />
                        <label class="select-label">Enter jwtToken here...</label>
                    </div>
                    <button id="render" class="pure-material-button-contained">View Verifications</button>
                </div>
            </div>
            <div class="md-modal" id="modal">
                <div class="close-btn-wrapper">
                    <a href="#" id="close"></a>
                </div>
                <div id="root">
                    <div id="iframeWrapper"></div>
                </div>
            </div>
            <div class="md-overlay"></div>
        </div>
    )
}

export default Form;