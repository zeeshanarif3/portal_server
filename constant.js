const config = require("./config/config").get(process.env.NODE_ENV || "local");
const { PORTS } = config;

//responseCodes
export const responseCodes = {
    successStatus: "Success",
    failedStatus: "Failed"
};

export const messages = {
    paymentSuccess: "Payment Successfull.",
    notaGroupChatId: "Not a group chat",
    createAccount: "Your account has been created successfully",
    failedAccount: "Your account create failed.",
    userExist: "User already exist.",
    userNameExist: "Username already exist.",
    emailExist: "Email already exists.",
    userNotFound: "User Not Found.",
    needToVerify: "Account Not Verified",
    dataNotFound: "No data found",
    incorrectPassword: "Incorrect email address or password",
    passwordNotCreated: "Password Not Created",
    loginSuccess: "Login successful",
    listSuccess: "Data fetched successfully",
    updateSuccess: "Data update successfully",
    profileUpdateSuccess: "Profile updated successfully",
    updateApprovalSuccess: "Successfully Approved.",
    statusUpdate: "Status update successfully",
    internalServerError: "Internal Server Error",
    passwordChangeSuccess: "Password Changed Successfully",
    previousPassword: "Your new password must be different from the previously used password.",
    profileUpdate: "Profile Setup Successfully",
    authError: "Auth Error",
    tokenExpire: "Token Expired",
    invalidToken: "Invalid Token",
    internalError: "Internal Server Error",
    emailSend: "Email successfully send.",
    add: "Data Add successfully",
    emailNotVerified: "Email not verified. Please use the 'Forgot Password' option to initiate the verification process",
    emailVerified: "Email Verified",
    emailAlreadyVerified: "Your link is expired",
    emailSend: "Email Send Successfully.",
    userAlredyAdd: "User already add wait for approval.",
    userAdd: "User add success wait for approval.",
    oldPassword: "Current Password is incorrect.",
    imageType: "Only image(jpeg, jpg, png) file upload.",
    failedUpdate: "Updation failed.",
    otpverify: "OTP verified.",
    otpExpire: "OTP expired.",
    invalidOtp: "Invalid OTP.",
    createCategory: "Category create successfully",
    failedCategory: "Category not created.",
    categoryExist: "Category already exist.",
    deleteSuccessfully: "Category deleted successfully.",
    createMentorship: "Mentorship created successfully",
    failedMentorship: "Mentorship not created.",
    mentorshipUpdateSuccess: "Mentorship updated successfully",
    deleteMentorshipSuccessfully: "Mentorship Plan deleted successfully.",
    createSession: "Session created successfully",
    failedSession: "Session not created.",
    sessionUpdateSuccess: "Session updated successfully",
    deleteSessionSuccessfully: "Session deleted successfully.",
    sameExist: "Session Name already exist.",
    sessionNotFound: "Session not found",
    chat_fecthed: "Chat Created Successfully",
    CHAT_FETCHED_MSG: "Chat Room Fetched Successfully",
    ExpirtyDate: "Expiry date passed",
    bookSuccessful: "Program Purchased Successfully",
    SUCCESS: "Your action was completed successfully",
    ERROR: "Error",
    CHAT_NOT_FOUND: "Chat Not found",
    DATA_FAILED: "Data Failed",
    deleteuserSuccessfully: "User deleted successfully.",
    sessionsFetchedSuccessfuly: "Sessions fetched successfully",
    programAlreadyBooked: "This program has been booked by you.",
    CHAT_NOT_FOUND: "Chat Not found",
    logout: "logout",
    logoutFailed: "Logout Failed",
    ratingAdd: "Rating submitted successfully",
    ratingNotSave: "Rating not save",
    alreadySubmit: "You have already submited the rating",
    alreadyrepied: "You have already replied",
    disputeRaised: "Dispute Raised Successfully",
    addMediaPost: "Successfully Shared Post",
    wrongDate: "The session's date is not within the start and end date of the program",
    tipSuccessful: "Thank you tip send successfully",
    wrong: "Something went wrong",
    Replied: "Response sent successfully",
    alreadyreplied: "Already response",
    alreadyupdate: "Already Update",
    NoRatingFound: "No rating found for this session",
    gotAverage: "Average fetched successfully",
    errorAccountCreate: "Failed to save bank account.",
    errorCardCreate: "Failed to add card try again.",
    errorBankAdd: "Failed to add bank try again.",
    accountAdd: "Successfully added details.",
    accountNotFound: "Account Not Found.",
    accountsellerDetails: "Account seller details fetch successfully.",
    newMentorshipProgramAdd: "New program request submitted",
    failednewMentorshipProgramAdd: "New Program request Failed",
    disputealreadySubmit: "Dispute Already submitted",
    helpSupport: "Thank you for getting in touch! We appreciate you contacting us ",
    meetingCancle: "Meeting Canceled Successfully",
    foundoutSuccefully: "Data Fetched Successfully",
    alreadyPosted: "Someone already posted this post",
    hasnotpurchasedanyProgram: "Need to purchase at least one program to access referral code.",
    hasnotcreatedandbuyProgram: "Please create a program in which at least one mentee has been registered to obtain a referral code to share",
    templateSave: "Template save successfully",
    templateNotSave: "Template not save",
    markedSuccess: "Attendance marked successfully",
    deleteCardSuccessfully: "Card deleted successfully",
    completeProfile: "Please complete your profile",
    emailSent: "Email sent successfully",
    passwordUpdate: "Your action was completed successfully.",
    DeleteAccountError:"This account is ineligible for deletion due to the presence of upcoming sessions.",
    ReportADD:"Report successfully created ",
    blocked:"Mentor blocked successfully",
    unblocked:"Mentor unblocked successfully"
};

export const messageID = {
    slots: 498,
    //to be used when no new record is inserted but to display success message
    successCode: 200,
    //to be used when new record is inserted
    newResourceCreated: 201,
    //to be used if database query return empty record
    nocontent: 204,
    //to be used if the request is bad e.g. if we pass record id which does not exits
    badRequest: 400,
    //to be used when the user is not authorized to access the API e.g. invalid access token. "jwtTokenExpired": 401
    unAuthorizedUser: 401,
    //to be used when access token is not valid
    forbidden: 403,
    //to be used if something went wrong
    failureCode: 404,
    //to be used when error occured while accessing the API
    internalServerError: 500,
    //to be used if record already axists
    conflictCode: 409,
    customError1: 420,
    customError2:421,


}

export const roleInInteger = (role) => {
    let roleText = '';
    if (role === 2) {
        return roleText = "mentee"
    } else if (role === 1) {
        return roleText = "mentor"
    } else {
        return roleText = "admin"
    }
}

export const emailText = {
    subjectEmail: "welcome to Pxalm",
    subjectEmailProfile: "Profile Setup",
    subjectContactUS: "Thanks for contact Us",
    subjectEmailApproval: "Mentorship Approval",
    newSession: "New Session Created",
    sessionAbouttoStart: "Session Start's Soon",
    programCancle: "A Mentorship Program has been Canceled",
    supportEmail: "Support Mail",
    socialMediaEmail: "Social Media Post",
    mentorCancelledSession:"Mentorship Session Cancelation Notification",
    newMentorshipEmail: "New Mentorship Program Request",
    cancelMeetingEmail: "Mentorship Session Cancelation Notification",
    matchingProgram: "Matching Program Found",
    locationShare: "Sharing the location"

}

export const fcmMessage = {
    MatchingProgramFound: "Matching Program Found",
    // ${firstName} ${lastName} Mentee cancel Session.
    MenteecancelSession: " Mentee cancel Session"
}
export const subjectEmail = (name) => {
    return `${name} welcome to Cadence`
}



export const htmlEmailVerify = (otp) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dock Nock email Template</title>
        <style>
            @media (max-width: 576px){
                section{
                    width: auto !important;
                }
                .box{
                    max-width: none !important;
                    width: 100% !important;
                }
                .innerBox{
                    max-width: 255px !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #f9f1e7; width: 100% !important; margin: 0; padding: 0;">
    <div class="box" style="max-width: 500px; margin: 0 auto; background-color: #F9F9F9; text-align:center;">
    <div class="innerBox" style="max-width: 300px; width: 100%; margin: auto; background-color: #fff; border-radius: 10px; padding: 20px; position: absolute; left: 50%; transform: translateX(-50%);">
        <h1 style="font-size: 32px; color: #272727; font-weight: 600; margin-top: 0; margin-bottom: 0;">Welcome</h1>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 10px;">To verify your account, please use the 6-digit OTP provided below:</p>
        <p style="font-size: 25px; font-weight: bold; margin: 0px; letter-spacing: 5px">${otp}</p>
        <p style="font-size: 15px; font-weight: 300; color: #656565; text-align: center;margin-top: 25px;"> Thank you, Team Pxalm.</p>
    </div>
</div>
    </body>
    </html>
    `
}


export const htmlEmailApproval = (token, name, role) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dock Nock email Template</title>
        <style>
            @media (max-width: 576px){
                section{
                    width: auto !important;
                }
                .box{
                    max-width: none !important;
                    width: 100% !important;
                }
                .innerBox{
                    max-width: 255px !important;
                }
            }
        </style> 
    </head>
    <body style="background-color: #f9f1e7; width: 100% !important; margin: 0; padding: 0;">
    <div class="box" style="max-width: 500px; margin: 0 auto; background-color: #F9F9F9; text-align:center;">
    <div class="innerBox" style="max-width: 300px; width: 100%; margin: auto; background-color: #fff; border-radius: 10px; padding: 20px; position: absolute; left: 50%; transform: translateX(-50%);">
        <h1 style="font-size: 32px; color: #272727; font-weight: 600; margin-top: 0; margin-bottom: 0;">Welcome</h1>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 10px;">To Approve mentorship please click on below button.</p>
		<a href=${PORTS.EMAILHOST}/admin-category-path style="background-color: #64BD05; text-align: center; display: inline-block; padding: 8px 0px; max-width: 150px; width: 100%; font-size: 14px; font-weight: 300; margin: 15px  auto 0; color: #fff; border-radius: 35px; text-decoration: none;">Click here</a>
        <p style="font-size: 15px; font-weight: 300; color: #656565; text-align: center;margin-top: 25px;"> Thanks, Team Pxalm.</p>
    </div>
</div>
    </body>
    </html>
    `
}




export const sessionAboutToStart = (token, name, role) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dock Nock email Template</title>
        <style>
            @media (max-width: 576px){
                section{
                    width: auto !important;
                }
                .box{
                    max-width: none !important;
                    width: 100% !important;
                }
                .innerBox{
                    max-width: 255px !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #f9f1e7; width: 100% !important; margin: 0; padding: 0;">
    <div class="box" style="max-width: 500px; margin: 0 auto; background-color: #F9F9F9; text-align:center;">
    <div class="innerBox" style="max-width: 300px; width: 100%; margin: auto; background-color: #fff; border-radius: 10px; padding: 20px; position: absolute; left: 50%; transform: translateX(-50%);">
        <h1 style="font-size: 32px; color: #272727; font-weight: 600; margin-top: 0; margin-bottom: 0;">Welcome</h1>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 10px;">Session is about to start. Please login to application to join session.</p>
		<a href=${PORTS.EMAILHOST}/login style="background-color: #64BD05; text-align: center; display: inline-block; padding: 8px 0px; max-width: 150px; width: 100%; font-size: 14px; font-weight: 300; margin: 15px  auto 0; color: #fff; border-radius: 35px; text-decoration: none;">Click here</a>
        <p style="font-size: 15px; font-weight: 300; color: #656565; text-align: center;margin-top: 25px;"> Thanks, Team Pxalm.</p>
    </div>
</div>
    </body>
    </html>
    `
}



export const newSessionCreated = (token, name, role) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dock Nock email Template</title>
        <style>
            @media (max-width: 576px){
                section{
                    width: auto !important;
                }
                .box{
                    max-width: none !important;
                    width: 100% !important;
                }
                .innerBox{
                    max-width: 255px !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #f9f1e7; width: 100% !important; margin: 0; padding: 0;">
    <div class="box" style="max-width: 500px; margin: 0 auto; background-color: #F9F9F9; text-align:center;">
    <div class="innerBox" style="max-width: 300px; width: 100%; margin: auto; background-color: #fff; border-radius: 10px; padding: 20px; position: absolute; left: 50%; transform: translateX(-50%);">
        <h1 style="font-size: 32px; color: #272727; font-weight: 600; margin-top: 0; margin-bottom: 0;">Welcome</h1>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 10px;">New Session Created. Click below link to check.</p>
		<a href=${PORTS.EMAILHOST}/login style="background-color: #64BD05; text-align: center; display: inline-block; padding: 8px 0px; max-width: 150px; width: 100%; font-size: 14px; font-weight: 300; margin: 15px  auto 0; color: #fff; border-radius: 35px; text-decoration: none;">Click here</a>
        <p style="font-size: 15px; font-weight: 300; color: #656565; text-align: center;margin-top: 25px;"> Thanks, Team Pxalm.</p>
    </div>
</div>
    </body>
    </html>
    `
}



export const sessionCancle = (program_name) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dock Nock email Template</title>
        <style>
            @media (max-width: 576px){
                section{
                    width: auto !important;
                }
                .box{
                    max-width: none !important;
                    width: 100% !important;
                }
                .innerBox{
                    max-width: 255px !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #f9f1e7; width: 100% !important; margin: 0; padding: 0;">
    <div class="box" style="max-width: 500px; margin: 0 auto; background-color: #F9F9F9; text-align:center;">
    <div class="innerBox" style="max-width: 300px; width: 100%; margin: auto; background-color: #fff; border-radius: 10px; padding: 20px; position: absolute; left: 50%; transform: translateX(-50%);">
        <h1 style="font-size: 32px; color: #272727; font-weight: 600; margin-top: 0; margin-bottom: 0;">Welcome</h1>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 10px;">  Please be informed that a Mentorship Program you were enrolled in has been canceled. We understand the inconvenience this may cause, and we would like to assure you that a refund for your payment will be processed. Kindly log in to the portal to check for further updates.</p>
		<a href=${PORTS.EMAILHOST}/mentee/mentee-dashboard/mentorship-programs style="background-color: #64BD05; text-align: center; display: inline-block; padding: 8px 0px; max-width: 150px; width: 100%; font-size: 14px; font-weight: 300; margin: 15px  auto 0; color: #fff; border-radius: 35px; text-decoration: none;">Click here</a>
        <p style="font-size: 15px; font-weight: 300; color: #656565; text-align: center;margin-top: 25px;"> Thanks, Team Pxalm.</p>
    </div>
</div>
    </body>
    </html>
    `
}


export const supportEmail = (description, name, role) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dock Nock email Template</title>
        <style>
            @media (max-width: 576px){
                section{
                    width: auto !important;
                }
                .box{
                    max-width: none !important;
                    width: 100% !important;
                }
                .innerBox{
                    max-width: 255px !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #f9f1e7; width: 100% !important; margin: 0; padding: 0;">
    <div class="box" style="max-width: 500px; margin: 0 auto; background-color: #F9F9F9; text-align:center;">
    <div class="innerBox" style="max-width: 500px; width: 100%; margin: auto; background-color: #fff; border-radius: 10px; padding: 20px; position: absolute; left: 50%; transform: translateX(-50%);">
        <h1 style="font-size: 32px; color: #272727; font-weight: 600; margin-top: 0; margin-bottom: 0;">Welcome</h1>
      
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 10px;">Program Name: ${description.ProgramName}</p>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 1px;">Session Name:${description.SessionName}</p>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 1px;">Start Time:${description.StartTime}</p>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 1px;">Meeting Location:${description.MeetingLocation}</p>
        <p style="font-size: 15px; font-weight: 300; color: #656565; text-align: center;margin-top: 25px;"> Thanks, Team Pxalm.</p>
        </div>
</div>
    </body>
    </html>
    `
}
export const referAndEarn=(description)=>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dock Nock email Template</title>
        <style>
            @media (max-width: 576px){
                section{
                    width: auto !important;
                }
                .box{
                    max-width: none !important;
                    width: 100% !important;
                }
                .innerBox{
                    max-width: 255px !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #f9f1e7; width: 100% !important; margin: 0; padding: 0;">
    <div class="box" style="max-width: 500px; margin: 0 auto; background-color: #F9F9F9; text-align:center;">
    <div class="innerBox" style="max-width: 500px; width: 100%; margin: auto; background-color: #fff; border-radius: 10px; padding: 20px; position: absolute; left: 50%; transform: translateX(-50%);">
        <h1 style="font-size: 32px; color: #272727; font-weight: 600; margin-top: 0; margin-bottom: 0;">Welcome</h1>
      
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 10px;">${description}</p>
        <p style="font-size: 15px; font-weight: 300; color: #656565; text-align: center;margin-top: 25px;"> Thanks, Team Pxalm.</p>
        </div>
</div>
    </body>
    </html>
    `


}

export const socialMediaPostMail = (description, name, role) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dock Nock email Template</title>
        <style>
            @media (max-width: 576px){
                section{
                    width: auto !important;
                }
                .box{
                    max-width: none !important;
                    width: 100% !important;
                }
                .innerBox{
                    max-width: 255px !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #f9f1e7; width: 100% !important; margin: 0; padding: 0;">
    <div class="box" style="max-width: 500px; margin: 0 auto; background-color: #F9F9F9; text-align:center;">
    <div class="innerBox" style="max-width: 300px; width: 100%; margin: auto; background-color: #fff; border-radius: 10px; padding: 20px; position: absolute; left: 50%; transform: translateX(-50%);">
        <h1 style="font-size: 32px; color: #272727; font-weight: 600; margin-top: 0; margin-bottom: 0;">Welcome</h1>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 10px;">New Social Media Post Upload. Please check </p>
        <a href=${PORTS.EMAILHOST}/login style="background-color: #64BD05; text-align: center; display: inline-block; padding: 8px 0px; max-width: 150px; width: 100%; font-size: 14px; font-weight: 300; margin: 15px  auto 0; color: #fff; border-radius: 35px; text-decoration: none;">Click here</a>
        <p style="font-size: 15px; font-weight: 300; color: #656565; text-align: center;margin-top: 25px;"> Thanks, Team Pxalm.</p>
    </div>
</div>
    </body>
    </html>
    `
}

export const newMentorshipProgramEmail = (description, name, role) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dock Nock email Template</title>
        <style>
            @media (max-width: 576px){
                section{
                    width: auto !important;
                }
                .box{
                    max-width: none !important;
                    width: 100% !important;
                }
                .innerBox{
                    max-width: 255px !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #f9f1e7; width: 100% !important; margin: 0; padding: 0;">
    <div class="box" style="max-width: 500px; margin: 0 auto; background-color: #F9F9F9; text-align:center;">
    <div class="innerBox" style="max-width: 300px; width: 100%; margin: auto; background-color: #fff; border-radius: 10px; padding: 20px; position: absolute; left: 50%; transform: translateX(-50%);">
        <h1 style="font-size: 32px; color: #272727; font-weight: 600; margin-top: 0; margin-bottom: 0;">Welcome</h1>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 10px;">A user wants a new mentorship program. Please check.</p>
        <a href=${PORTS.EMAILHOST}/mentor/mentor-dashboard/requested-program style="background-color: #64BD05; text-align: center; display: inline-block; padding: 8px 0px; max-width: 150px; width: 100%; font-size: 14px; font-weight: 300; margin: 15px  auto 0; color: #fff; border-radius: 35px; text-decoration: none;">Click here</a>
        <p style="font-size: 15px; font-weight: 300; color: #656565; text-align: center;margin-top: 25px;"> Thank you, Team Pxalm.</p>
    </div>
</div>
    </body>
    </html>
    `
}

/* delete session by mentor */

export const deleteSessinBymentor = (firstName, lastName) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dock Nock email Template</title>
        <style>
            @media (max-width: 576px){
                section{
                    width: auto !important;
                }
                .box{
                    max-width: none !important;
                    width: 100% !important;
                }
                .innerBox{
                    max-width: 255px !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #f9f1e7; width: 100% !important; margin: 0; padding: 0;">
    <div class="box" style="max-width: 500px; margin: 0 auto; background-color: #F9F9F9; text-align:center;">
    <div class="innerBox" style="max-width: 300px; width: 100%; margin: auto; background-color: #fff; border-radius: 10px; padding: 20px; position: absolute; left: 50%; transform: translateX(-50%);">
        <h1 style="font-size: 32px; color: #272727; font-weight: 600; margin-top: 0; margin-bottom: 0;">Welcome</h1>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 10px;"> We regret to inform you that your upcoming mentorship session with ${firstName} ${lastName} has been canceled.</p>
        <a href=${PORTS.EMAILHOST}/login style="background-color: #64BD05; text-align: center; display: inline-block; padding: 8px 0px; max-width: 150px; width: 100%; font-size: 14px; font-weight: 300; margin: 15px  auto 0; color: #fff; border-radius: 35px; text-decoration: none;">Click here</a>
        <p style="font-size: 15px; font-weight: 300; color: #656565; text-align: center;margin-top: 25px;"> Thanks, Team Pxalm.</p>
    </div>
</div>
    </body>
    </html>
    `
}

export const cancelMeetingByMentee = (firstName, lastName) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dock Nock email Template</title>
        <style>
            @media (max-width: 576px){
                section{
                    width: auto !important;
                }
                .box{
                    max-width: none !important;
                    width: 100% !important;
                }
                .innerBox{
                    max-width: 255px !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #f9f1e7; width: 100% !important; margin: 0; padding: 0;">
    <div class="box" style="max-width: 500px; margin: 0 auto; background-color: #F9F9F9; text-align:center;">
    <div class="innerBox" style="max-width: 300px; width: 100%; margin: auto; background-color: #fff; border-radius: 10px; padding: 20px; position: absolute; left: 50%; transform: translateX(-50%);">
        <h1 style="font-size: 32px; color: #272727; font-weight: 600; margin-top: 0; margin-bottom: 0;">Welcome</h1>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 10px;">Please note that the mentee, ${firstName} ${lastName}, won't be attending the session.</p>
        <a href=${PORTS.EMAILHOST}/login style="background-color: #64BD05; text-align: center; display: inline-block; padding: 8px 0px; max-width: 150px; width: 100%; font-size: 14px; font-weight: 300; margin: 15px  auto 0; color: #fff; border-radius: 35px; text-decoration: none;">Click here</a>
        <p style="font-size: 15px; font-weight: 300; color: #656565; text-align: center;margin-top: 25px;"> Thanks, Team Pxalm.</p>
    </div>
</div>
    </body>
    </html>
    `
}




export const matchingProgramCreated = (token, name, role) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dock Nock email Template</title>
        <style>
            @media (max-width: 576px){
                section{
                    width: auto !important;
                }
                .box{
                    max-width: none !important;
                    width: 100% !important;
                }
                .innerBox{
                    max-width: 255px !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #f9f1e7; width: 100% !important; margin: 0; padding: 0;">
    <div class="box" style="max-width: 500px; margin: 0 auto; background-color: #F9F9F9; text-align:center;">
    <div class="innerBox" style="max-width: 300px; width: 100%; margin: auto; background-color: #fff; border-radius: 10px; padding: 20px; position: absolute; left: 50%; transform: translateX(-50%);">
        <h1 style="font-size: 32px; color: #272727; font-weight: 600; margin-top: 0; margin-bottom: 0;">Welcome</h1>
        <p style="font-size: 15px; font-weight: 300; color: #656565; margin-top: 10px;">Matching Program Found. Click below link to check.</p>
		<a href=${PORTS.EMAILHOST}/login style="background-color: #64BD05; text-align: center; display: inline-block; padding: 8px 0px; max-width: 150px; width: 100%; font-size: 14px; font-weight: 300; margin: 15px  auto 0; color: #fff; border-radius: 35px; text-decoration: none;">Click here</a>
        <p style="font-size: 15px; font-weight: 300; color: #656565; text-align: center;margin-top: 25px;"> Thanks, Team Pxalm.</p>
    </div>
</div>
    </body>
    </html>
    `
}