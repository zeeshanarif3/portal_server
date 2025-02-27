export const trainerEmailTemplate = (First_name, email, password) => {
    return {
        subject: "Trainer Account Created",
        html: `
            <h2>Welcome, ${First_name}!</h2>
            <p>Your trainer account has been created successfully.</p>
            <p><strong>Login Details:</strong></p>
            <ul>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Password:</strong> ${password}</li>
            </ul>
            <p>Please log in and change your password.</p>
            <p>Best Regards,<br/>Admin Team</p>
        `,
    };
};
