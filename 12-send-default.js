const sendEmail = (recipient, subject = "No Subject") => {
    return `Sending email to: ${recipient} | Subject: ${subject}`;
};

console.log(sendEmail("astrid@example.com"));

console.log(sendEmail("astrid@example.com", "Meeting Reminder"));
