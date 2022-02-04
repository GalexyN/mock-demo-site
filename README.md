![image](https://user-images.githubusercontent.com/66571090/152448004-0889f615-56de-4b5e-b135-01db8c0bed46.png)

## Getting Started
**1. Clone down this repository**

```sh
git clone https://github.com/GalexyN/mock-demo-site
```

**2. Navigate to the cloned down repository and install packages**

```sh
cd mock-demo-site
npm i
```

**3. Compile the packages and start the server**

```sh
npm start
```

**4. Go to localhost:3000 on a web browser**

Its currently aligned to port 3000 but you can change the port for the server in `server/server.js`

### Features
#### Initiating VerifyIQ
1. Navigate to the settings icon in the View Applications Card
2. ![image](https://user-images.githubusercontent.com/66571090/152448244-24124eb8-431f-4cc4-a96c-ad833ea0cf9a.png)
3. Click on the settings icon and you'll be prompted for 'Required Settings'
4. ![image](https://user-images.githubusercontent.com/66571090/152448296-289eb52e-f8d6-4301-8d50-c76567e3f1f5.png)
5. Fill in your personalized settings
6. Click the 'initiate' button to instantiate VerifyIQ on your web session
7. ![image](https://user-images.githubusercontent.com/66571090/152448403-417fde1e-5d15-4b58-8127-1368591e52ce.png)

#### Application Look Up
1. After instantiating your Verify IQ object you'll be able to look up applications based on the VerifyIQ setup
2. Enter your application id in the form field and press 'Find App'
3. ![image](https://user-images.githubusercontent.com/66571090/152448596-00e6ad15-9a12-47d2-ac46-9e2a52036c45.png)
4. If this is the first session on the browser you will be prompted to login to the environment
5. After logging in and inputting a valid application id your application will be rendered in a modal embedded with VerifyIQ
6. ![image](https://user-images.githubusercontent.com/66571090/152448744-ce527a5a-cf92-4cf5-b7fb-67e8f664ea38.png)

#### Changing Environments
1. Changing environments is easily done by changing your credentials, url's, and environment selection in the required settings
2. ![image](https://user-images.githubusercontent.com/66571090/152448897-65a79674-d396-45d5-8883-657f139f412b.png)
3. ![image](https://user-images.githubusercontent.com/66571090/152448914-5f57c860-c708-494b-8eed-77099c62c739.png)

#### Optional Configuration for rendering applications
1. When rendering an application, find app button, there are many configurable options that are allowed. Find these in the 'Optional Settings' dropdown
2. ![image](https://user-images.githubusercontent.com/66571090/152449048-f5f48bef-75c5-4fce-a914-f3669ffde9b6.png)
3. Choose your desired configurations close the modal and relookup your application

### Understanding Optional Configurations

#### Environment

Accessible as **`VerifyIQ.<Env>`**;

| Env        | Description                                           |
| ---------- | ----------------------------------------------------- |
| Staging    | Set the SDK to run in the Staging/Testing environment |
| Production | Set the SDK to run in the Production environment      |

#### StipulationTypes

Accessible as **`VerifyIQ.StipulationTypes`**;

| StipulationTypes                        | Display Name                                     |
| --------------------------------------- | -------------------------------------------------|
| Income                                  | Proof of Income                                  |
| Residence                               | Proof of Residence                               |
| Identity                                | Proof of Identity                                |
| Insurance                               | Proof of Insurance                               |
| SSN                                     | Proof of SSN                                     |
| Trade                                   | Proof of Trade                                   |
| PaidAccount                             | Proof of Paid Account                            |
| Phone                                   | Proof of Phone                                   |
| MortgageCurrent                         | Proof of Mortgage                                |
| BankruptcyDischarged                    | Proof of BK Discharged                           |
| TaxLienSatisfied                        | Proof of Tax Lien                                |
| Rent                                    | Proof of Rent                                    |
| ChildSupportPaidAndCurrent              | Proof of Child Support                           |
| ArticlesOfIncorporation                 | Proof of Business                                |
| ExecutedCrossCollateralDefaultAgreement | Proof of Cross Collateral                        |

#### ApplicantTypes

Accessible as **`VerifyIQ.ApplicantTypes`**;

| ApplicantTypes   | Description                                |
| ---------------- | ------------------------------------------ |
| PrimaryApplicant | Set the applicant type to PrimaryApplicant |
| CoApplicant      | Set the applicant type to CoApplicant      |

#### EventTypes

Accessible as **`VerifyIQ.<Event>`**;

| Event      | Description                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------- |
| Loaded     | Event represents VerifyIQ loaded event and will trigger on first contentful paint             |
| Pass       | Event represents VerifyIQ pass event and will trigger on verification pass action             |
| Incomplete | Event represents VerifyIQ incomplete event and will trigger on verification incomplete action |
| Waive      | Event represents VerifyIQ waive event and will trigger on verification waive action           |

#### DocumentModalOptions

Accessible as **`VerifyIQ.DocumentModalOptions`**;

| DocumentModalOptions |
| ----------                                    |
| None                                          |
| RequestDocuments                              |
| RequestDocumentsOnlyIfNoAssociatedDocuments   |
| UploadDocuments                               |
| UploadDocumentsOnlyIfNoAssociatedDocuments    |

#### PrecheckedDocuments structure guide
| StipulationType | Supported Document Types |
| ------------- | ------------- |
| identity  | driverLicenseFront, driverLicenseBack, passport, greenCard, stateId |
| income  | paystub, bankStatement, ssiAwardLetter, militaryLES, individualTaxReturn, w2, form1099 |
| residence  | utilityBill, bankStatement |
| insurance  | insuranceIDCard, declarationsPage |

**Note: Quantity is only supported in `income` stipulation and maximum number you can request is 6** 

## VerifyIQ Documentation
[VerifyIQ SDK Repo](https://github.com/Informed/verifyiq-sdk)
[VerifyIQ SDK Documentation](https://www.npmjs.com/package/@informed-iq/verify-iq-sdk/v/1.11.1)
