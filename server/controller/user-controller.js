
import User from "../model/user-schema.js";
import Notice from '../model/notice-schema.js';
import QuestionPaperModel from '../model/qestion-schema.js';
import Result from "../model/result-schema.js";
import nodemailer from 'nodemailer';
// import { User } from './models';
import generateToken from './generateToken.js';
import { request, response } from "express";
import Mail from "../model/contactmail-schema.js";

// User sign-up function with session management
export const userSignUp = async (request, response) => {
    try {
        const { name, phone, year, username, password, confirmpassword,  roll,
            section } = request.body;
        console.log(username)

        // Check if user with the provided email already exists
        const exist = await User.findOne({ username });
        if (exist) {
            return response.status(401).json({ message: 'User already exists' });
        }

        // Check if password matches the confirmed password
        if (password !== confirmpassword) {
            return response.status(400).json({ message: 'Passwords do not match' });
        }

        // Create a new user object
        const newUser = new User({
            name,
            phone,
            year,
            username,
            roll,
            section,
            password // Note: Password should be hashed before saving in real-world applications
        });

        // Save the new user to the database


        await newUser.save();

        // Store user information in the session
        // request.session.user = newUser;

        // Respond with a success message
        response.status(200).json({ message: 'User created successfully', user: newUser });

    } catch (error) {
        // Handle any errors
        response.status(500).json({ message: error.message });
    }
}

// User login function with session management
export const userLogIn = async (request, response) => {
    try {
        const { username, password } = request.body;
        console.log(username, password);
        console.log("asdjgasdg")

        // Find user in the database by username and password
        const user = await User.findOne({ username, password });
        if (!user) {
            return response.status(401).json({ message: 'Invalid login credentials' });
        }

        // Store user information in the session
        // request.session.user = user;

        // Respond with the logged-in user information
        response.status(200).json({ message: 'Login successful', user });

    } catch (error) {
        // Handle any errors
        response.status(500).json({ message: error.message });
    }
}




export const userLogout = async (request, response) => {
    // Your logout logic here
    // Destroy session upon logout
    request.session.destroy((err) => {
        if (err) {
            console.log(err);
            response.status(500).json({ message: 'Error logging out' });
        } else {
            response.status(200).json({ message: 'Logout successful' });
        }
    });
};





const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
};




const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nscecse715@gmail.com', // Your Gmail email address
        pass: 'zkws kazy jkeu iugb' // Your Gmail password
    }
});

// Function to send reset password email
const sendResetPasswordEmail = async (email, otp) => {
    // Create email content
    const mailOptions = {
        from: 'nseccse715@gmail.com',
        to: email,
        subject: 'Password Reset OTP',
        text: `You are receiving this because you (or someone else) have requested to reset the password for your account.\n\n` +
            `Your OTP (One Time Password) for password reset is: ${otp}\n\n` +
            `If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    // Send email
    await transporter.sendMail(mailOptions);
};

export const userForget = async (request, response) => {
    try {
        const { username, otp } = request.body;

        // Find the user by email
        const user = await User.findOne({ username: username });
        // console.log(user, otp)

        if (!user) {
            // User not found, return an error
            return response.status(404).json({ error: "User not found" });
        }

        // If OTP is provided, verify it
        if (otp) {
            // Retrieve the OTP from the user's document
            const storedOTP = user.resetPasswordOTP;
            console.log(storedOTP)

            // Check if OTP matches and is valid
            if (storedOTP === otp && user.resetPasswordExpires > Date.now()) {
                // Clear OTP from the user's document
                user.resetPasswordOTP = null;
                user.resetPasswordExpires = null;
                await user.save();

                return response.status(200).json({ message: "OTP verified successfully" });
            } else {
                return response.status(400).json({ error: "Invalid OTP or OTP expired" });
            }
        } else {
            // Generate a 4-digit OTP
            const generatedOTP = generateOTP().toString();

            // Save the OTP in the user's document
            user.resetPasswordOTP = generatedOTP;
            user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
            await user.save();

            // Send OTP to the user's email
            await sendResetPasswordEmail(user.username, generatedOTP);

            return response.status(200).json({ message: "Password reset OTP sent" });
        }
    } catch (error) {
        console.error("Error occurred while processing password reset request:", error);
        response.status(500).json({ error: "Internal server error" });
    }
};


export const userResetpassword = async (request, response) => {
    const { password, confirmPassword, username } = request.body;
    // console.log(password,username)

    try {
        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            return response.status(400).json({ error: "Passwords do not match" });
        }




        // Update user's password in the database
        // You need to retrieve the user from the database based on some identifier like email or user ID
        // For example:

        // const exist = await User.findOne({ username });
        const user = await User.findOne({ username });
        if (!user) {
            return response.status(404).json({ error: "User not found" });
        }
        user.password = password;
        await user.save();

        // For demonstration purposes, I'm assuming the user is found and updated successfully
        return response.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
        console.error("Error occurred while resetting password:", error);
        return response.status(500).json({ error: "Internal server error" });
    }
};

export const userEvent = async (request, response) => {

}


export const userNotice = async (request, response) => {
    try {
        const { title, noticeDescription, fromDate, toDate } = request.body;
        console.log(noticeDescription)
        const newNotice = new Notice({
            title,
            noticeDescription,
            fromDate,
            toDate
        });
        await newNotice.save();
        response.status(201).json(newNotice);


    } catch (error) {
        response.status(500).json({ message: error.message });

    }

}

export const getNotice = async (request, response) => { // Adjust parameters to (request, response)
    try {
        const notices = await Notice.find();
        response.status(200).json(notices);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}



export const deleteNotice = async (request, response) => {
    try {
        // Extract noticeId from the request body
        const { noticeId } = request.body;

        // Perform the deletion operation based on the noticeId
        // For example, you can use Mongoose to delete the notice from the database
        // Replace the following line with your actual deletion logic
        await Notice.findByIdAndDelete(noticeId);

        // Respond with a success message
        response.status(200).json({ message: 'Notice deleted successfully' });
    } catch (error) {
        // Handle any errors that occur during the deletion process
        console.error('Error deleting notice:', error);
        // Respond with an error message
        response.status(500).json({ message: 'Failed to delete notice', error: error.message });
    }
}

 export const editNotice = async (request, response) => {
    try {
        const { noticeId } = request.body;

        // Check if noticeId is provided
        if (!noticeId) {
            return response.status(400).json({ message: 'Notice ID is required' });
        }

        // Log noticeId to confirm it is being extracted correctly
        // console.log('Notice ID:', noticeId);

        // Find the notice by its _id
        const notice = await Notice.findOne( {_id:noticeId} );

        // If notice not found, return 404
        if (!notice) {
            return response.status(404).json({ message: 'Notice not found' });
        }

        // Return the found notice
        response.status(200).json(notice);
    } catch (error) {
        console.error('Error retrieving notice:', error);
        response.status(500).json({ message: 'Failed to retrieve notice', error: error.message });
    }
};

export default editNotice;



export const updateNotice = async (request, response) => {
    try {
     
        const { noticeId,title, noticeDescription, fromDate, toDate  } = request.body;

       const notice= await Notice.findOne({_id:noticeId} );
        notice.title=title;
        notice.noticeDescription=noticeDescription;
        notice.fromDate=fromDate;
        notice.toDate=toDate;
        await notice.save();
        
        
        response.status(200).json({message:"update successfull"});
    } catch (error) {
        // Handle any errors that occur during the deletion process
        console.error('Error deleting notice:', error);
        // Respond with an error message
        response.status(500).json({ message: 'Failed to delete notice', error: error.message });
    }
}

export const createQuestion = async (request, response) => {
    try {
        // Extract the 'getquestions' array, 'questionid', and 'password' from the request body
        const { getquestions  } = request.body;
        const { qestionid,password,timeInSeconds,subject  } = request.body;

        // Validate the structure of each question in the 'getquestions' array
        // For simplicity, let's assume the structure is already validated

        // Save the question paper data to the database along with question ID and password
        const questionPaper = new QuestionPaperModel({ 
            questionId: qestionid,
            password:password,
            questions:getquestions,
            timeInSeconds:timeInSeconds,
            subject:subject
        });
        await questionPaper.save();

        // Send a success response
        response.status(201).json({ message: 'Question paper created successfully' });
    } catch (error) {
        console.error('Error creating question paper:', error);
        // Send an error response
        response.status(500).json({ error: 'An error occurred while creating the question paper' });
    }
};


export const examLogin = async (request, response) => {
    try {
        const { questionid, username, name, password } = request.body;

        // Validate user credentials
        const user = await User.findOne({ username });
        if (!user) {
            return response.status(401).json({ message: 'Invalid login credentials' });
        }

        // Validate question paper ID and password
        const paper = await QuestionPaperModel.findOne({ questionId: questionid, password });
        if (!paper) {
            return response.status(401).json({ message: 'Invalid login credentials for exam' });
        }

        // If validation passes
        response.status(200).json({ message: 'Login successful for exam', user });
    } catch (error) {
        console.error('Error during exam login:', error);
        response.status(500).json({ message: 'An error occurred during exam login' });
    }
};

export const getPaper = async (request, response) => {
    try {
        const { questionid } = request.body;

        

        // Validate question paper ID and password
        const paper = await QuestionPaperModel.findOne({ questionId: questionid });
        if (!paper) {
            return response.status(401).json({ message: 'Invalid login credentials for exam' });
        }

        // If validation passes
        response.status(200).json({paper });
        // console.log(paper)
    } catch (error) {
        console.error('Error during exam login:', error);
        response.status(500).json({ message: 'An error occurred during exam login' });
    }
};



export const addResult = async (request, response) => {
    try {
      const { username, questionid, selectedOptions, score } = request.body;
  
      // Find the user by username to get their name
      const user = await User.findOne({ username });
      if (!user) {
        return response.status(404).send('User not found');
      }
  
      // Check if the result already exists for this user and questionid
      const existingResult = await Result.findOne({ username, questionid });
      if (existingResult) {
        return response.status(401).json({ message: 'Paper already submitted' });
      }
  console.log(questionid)
      // Find the question paper to get the subject
      const paper = await QuestionPaperModel.findOne({ questionId:questionid });
      if (!paper) {
        return response.status(404).send('Question paper not found');
      }
  
      // Create a new result entry
      const result = new Result({
        name: user.name,
        username,
        questionid,
        selectedOptions,
        score,
        subject: paper.subject
      });
  
      // Save the result to the database
      await result.save();
      response.status(200).send('Result saved successfully');
    } catch (error) {
      console.error('Error saving result:', error);
      response.status(500).send('Error saving result: ' + error.message);
    }
  };
  

export const getScore = async (request, response) => { // Adjust parameters to (request, response)
    try {
        const result = await Result.find();
        // console.log(request)
        response.status(200).json(result);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const accessStudent=async(request,response)=>{
    const {username}=request.body;
    console.log(username);
    try {
        const user= await User.findOne({username});
        console.log(user)
        if (!user) {
            return response.status(404).send('User not found');
          }
            response.status(200).json(user);
        
    } catch (error) {
        response.status(500).json({ message: error.message });
       
        
    }

}






export const sarchResult = async (request, response) => {
    const {  questionid } = request.body;
    const { username } = request.body;
    console.log(username)
    console.log(questionid)
   

    try {
        const data = await Result.findOne({username: username,questionid:questionid });
        console.log({data});

          if (data) {
            response.status(200).json({data} );
        } else {
            response.status(404).json({ message: 'Result not found' });
        }

    } catch (error) {
        console.error('Error fetching result:', error);
        response.status(500).json(error);
    }
};

export const contactUser= async(request,response)=>{
    try {
         const {name,email,subject,message}=request.body;
         const newMail = new Mail({
            name,
            email,
            subject,
            message
        });
        await newMail.save();
        console.log("mail save")


         const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: `Thank you for contacting us, ${name}`,
            text: `Dear ${name},\n\nThank you for your message...\n\nWe will get back to you shortly.\n\nBest regards,\nNSEC`
        };
     
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return response.status(500).json({ error: 'Error sending email' });
            }
            console.log('Email sent:', info.response);
            response.status(200).json({ message: 'Thank you email sent successfully' });
        });
    } catch (error) {
        console.error('Error processing request:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
}
export const getMail=async(request,response)=>{
    try {
       const mail=  await Mail.find();
        response.status(200).json(mail);
        
    } catch (error) {
        console.error('Error processing request:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
}




export const replyUser= async(request,response)=>{
    try {
         const {name,email,subject,message}=request.body;
   


         const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: ` ${subject}`,
            text: `${message}`
        };
     
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return response.status(500).json({ error: 'Error sending email' });
            }
            console.log('Email sent:', info.response);
            response.status(200).json({ message: 'Thank you email sent successfully' });
        });
    } catch (error) {
        console.error('Error processing request:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
}