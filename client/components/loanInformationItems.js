
import faker from '@faker-js/faker';
export const loanInformationItems = [];
const statuses = ['Payment Pending', 'Delinquent', 'Paid'];

const generateFakeData = () => {
    for (let i = 0; i < 15; i++) {
        loanInformationItems.push({
            id: i,
            application_id: faker.datatype.uuid(),
            original_loan_date: faker.date.past().toLocaleDateString(),
            full_name: faker.name.findName(),
            email: faker.internet.email(),
            outstanding_loan_amount: faker.finance.amount(250000, 750000, 2 ,"$", true),
            total_loan_amount: faker.finance.amount(250000, 750000, 2, "$", true),
            next_loan_payment_date: faker.date.future().toLocaleDateString(),
            status: statuses[Math.floor(Math.random() * statuses.length)],
        });
    }
}

if (!loanInformationItems.length) {
    generateFakeData();
}

// export const loanInformationItems = [{
//     "id": 1,
//     "application_id": "f106da07-021d-4602-84c1-12c348af36bc",
//     "original_loan_date": "4/25/2021",
//     "full_name": "Donica Banke",
//     "email": "dbanke0@adobe.com",
//     "username": "dbanke0",
//     "outstanding_loan_amount": "$504,825.93",
//     "total_loan_amount": "$3,327,975.29",
//     "next_loan_payment_date": "10/1/2022"
// }, {
//     "id": 2,
//     "application_id": "47e60643-5274-47cc-ac34-9de361a5b39c",
//     "original_loan_date": "4/20/2021",
//     "full_name": "Laural Scuffham",
//     "email": "lscuffham1@cloudflare.com",
//     "username": "lscuffham1",
//     "outstanding_loan_amount": "$304,381.70",
//     "total_loan_amount": "$7,720,412.14",
//     "next_loan_payment_date": "10/2/2022"
// }, {
//     "id": 3,
//     "application_id": "545a0a6a-b87b-49cb-9fbc-d4f14202e466",
//     "original_loan_date": "5/28/2021",
//     "full_name": "Marnie Lindelof",
//     "email": "mlindelof2@amazon.co.uk",
//     "username": "mlindelof2",
//     "outstanding_loan_amount": "$423,358.84",
//     "total_loan_amount": "$4,317,560.36",
//     "next_loan_payment_date": "4/11/2022"
// }, {
//     "id": 4,
//     "application_id": "7343c8d5-3726-4344-a26c-cedd5cf18d15",
//     "original_loan_date": "10/12/2021",
//     "full_name": "Chancey Bullon",
//     "email": "cbullon3@meetup.com",
//     "username": "cbullon3",
//     "outstanding_loan_amount": "$275,970.81",
//     "total_loan_amount": "$6,413,002.01",
//     "next_loan_payment_date": "9/5/2022"
// }, {
//     "id": 5,
//     "application_id": "019548e6-2f8d-4ed5-8dfa-b2c7dba2dedc",
//     "original_loan_date": "12/20/2021",
//     "full_name": "Yurik Ginley",
//     "email": "yginley4@tinypic.com",
//     "username": "yginley4",
//     "outstanding_loan_amount": "$422,448.37",
//     "total_loan_amount": "$5,862,925.16",
//     "next_loan_payment_date": "7/31/2022"
// }, {
//     "id": 6,
//     "application_id": "195c6927-c0b3-43ec-958d-be62db2d5907",
//     "original_loan_date": "6/10/2021",
//     "full_name": "Robinetta Clint",
//     "email": "rclint5@discovery.com",
//     "username": "rclint5",
//     "outstanding_loan_amount": "$289,065.50",
//     "total_loan_amount": "$6,739,655.16",
//     "next_loan_payment_date": "1/28/2022"
// }, {
//     "id": 7,
//     "application_id": "5d771623-40fb-4c4c-a14d-e66b3b8ca2f2",
//     "original_loan_date": "7/16/2021",
//     "full_name": "Sherrie Lambricht",
//     "email": "slambricht6@gravatar.com",
//     "username": "slambricht6",
//     "outstanding_loan_amount": "$576,982.06",
//     "total_loan_amount": "$1,024,761.52",
//     "next_loan_payment_date": "1/12/2022"
// }, {
//     "id": 8,
//     "application_id": "9c43b642-d6b7-4f8d-96b7-176dc73e3dce",
//     "original_loan_date": "2/4/2021",
//     "full_name": "Rock Wethers",
//     "email": "rwethers7@weather.com",
//     "username": "rwethers7",
//     "outstanding_loan_amount": "$409,032.46",
//     "total_loan_amount": "$2,492,890.14",
//     "next_loan_payment_date": "6/16/2022"
// }, {
//     "id": 9,
//     "application_id": "80f475fa-4c24-404b-b6e0-6bd8dbf08704",
//     "original_loan_date": "4/13/2021",
//     "full_name": "Federico Westnage",
//     "email": "fwestnage8@soup.io",
//     "username": "fwestnage8",
//     "outstanding_loan_amount": "$483,322.06",
//     "total_loan_amount": "$3,530,779.97",
//     "next_loan_payment_date": "5/23/2022"
// }, {
//     "id": 10,
//     "application_id": "b2e08123-a496-4317-829d-bcb485680fd8",
//     "original_loan_date": "10/17/2021",
//     "full_name": "Jenelle Eadington",
//     "email": "jeadington9@live.com",
//     "username": "jeadington9",
//     "outstanding_loan_amount": "$371,242.42",
//     "total_loan_amount": "$7,710,362.41",
//     "next_loan_payment_date": "4/24/2022"
// }, {
//     "id": 11,
//     "application_id": "3dc4353e-a087-4f24-b076-4d217ad62e0f",
//     "original_loan_date": "12/30/2021",
//     "full_name": "Clyve Pallesen",
//     "email": "cpallesena@hostgator.com",
//     "username": "cpallesena",
//     "outstanding_loan_amount": "$310,346.12",
//     "total_loan_amount": "$3,865,553.62",
//     "next_loan_payment_date": "12/23/2022"
// }, {
//     "id": 12,
//     "application_id": "91a9877f-523b-4389-b22d-a1e39ab51671",
//     "original_loan_date": "11/21/2021",
//     "full_name": "Wain McDuffie",
//     "email": "wmcduffieb@google.ru",
//     "username": "wmcduffieb",
//     "outstanding_loan_amount": "$480,550.75",
//     "total_loan_amount": "$6,618,434.75",
//     "next_loan_payment_date": "5/27/2022"
// }, {
//     "id": 13,
//     "application_id": "95c11bce-ddde-433a-b4b7-d6ccbb3d0d19",
//     "original_loan_date": "8/20/2021",
//     "full_name": "Phedra Boecke",
//     "email": "pboeckec@pbs.org",
//     "username": "pboeckec",
//     "outstanding_loan_amount": "$501,712.10",
//     "total_loan_amount": "$1,479,930.50",
//     "next_loan_payment_date": "6/8/2022"
// }, {
//     "id": 14,
//     "application_id": "ffaf42b8-dbbd-4005-ac1d-3d9ca051036e",
//     "original_loan_date": "1/8/2022",
//     "full_name": "Joannes Raison",
//     "email": "jraisond@comsenz.com",
//     "username": "jraisond",
//     "outstanding_loan_amount": "$560,692.27",
//     "total_loan_amount": "$7,450,061.48",
//     "next_loan_payment_date": "8/11/2022"
// }, {
//     "id": 15,
//     "application_id": "0a7d864e-f49c-4447-96b8-8308ac66dfae",
//     "original_loan_date": "2/6/2021",
//     "full_name": "Bernadene Portman",
//     "email": "bportmane@nhs.uk",
//     "username": "bportmane",
//     "outstanding_loan_amount": "$483,785.24",
//     "total_loan_amount": "$5,154,082.77",
//     "next_loan_payment_date": "6/29/2022"
// }]
