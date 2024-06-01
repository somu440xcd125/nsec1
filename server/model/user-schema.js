import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
              name:{
                            type:String,
                            required:true,
                            trim:true,
                            min:5,
                            max:20
              },
              roll:{
                            type:Number,
                            required:true,
                           
                            
              },
              section:{
                            type:String,
                            required:true,
                            trim:true,
                            min:5,
                            max:20
              },
       
                            
              
              username:{
                            type:String,
                            required:true,
                            trim:true,
                            unique:true
              },
              password:{
                            type:String,
                            required:true,

              },
              phone:{
                            type:String,
                            required:true
              },
              year: {
                type: Number,
                required: true,
                min: 1,
                max: 4
            },

            resetPasswordOTP: {
              type: String, 
              default: null 
          },
          resetPasswordExpires: {
              type: Date,
              default: null
          },
          role:{
            type:String,
            default: "student"
            
          }
              
});

const user=mongoose.model('user',userSchema);
export default user;