
const bcrypt=require("bcrypt");

export const hashedPassword=async(plainpassword)=>{
    const saltround=10;
    const hashedpassword=await bcrypt.hash(plainpassword,saltround);
    return hashedPassword;
}


export const comparePass=async(plainpassword,hashedpassword)=>{

    const matched=await bcrypt.compare(plainpassword,hashedPassword);
    return matched
}