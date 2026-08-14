import React from "react";
import AuthForm from "~/components/authForm";

export default function Signup(){
    const handleSignup = (email:string, pass:string) => {
        console.log(pass)
    }
    return(
        <>
        <AuthForm onSubmit={handleSignup} formTitle="Create Account" buttonTitle="Sign Up"/>
        </>
    );
}
