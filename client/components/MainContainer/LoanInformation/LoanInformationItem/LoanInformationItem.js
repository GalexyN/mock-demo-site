import React from 'react'
import LoanInformation from '../LoanInformation';
import './styles.css';

const LoanInformationItem = ({ item }) => {
    const
        {
            first_name,
            last_name,
            email,
            gender,
            loan_amount,
            user_avatar,
            next_loan_payment_date
        } = item
    return (
        <div className="loan-information-item">
            <div className="loan-information-item-full-name">{first_name} {last_name} | {email}</div>
            <div className="loan-information-item-loan_amount">{loan_amount}</div>
            <div className="loan-information-item-next_loan_payment_date">{next_loan_payment_date}</div>
        </div>
    )
}

export default LoanInformationItem;