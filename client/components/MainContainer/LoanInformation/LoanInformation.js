import React from 'react'
import './styles.css';
import { loanInformationItems } from './loanInformationItems';

// COMPONENTS //
import LoanInformationItem from './LoanInformationItem/LoanInformationItem';

const LoanInformation = () => {
    return (
        <div className="loan-information-container">
            <div className="loan-information-header">
                <div>User Details</div>
                <div>Loan Amount</div>
                <div>Next Payment Date</div>
            </div>
            {loanInformationItems.map(item => <LoanInformationItem key={item.id} item={item} />)}
        </div>
    )
}

export default LoanInformation;