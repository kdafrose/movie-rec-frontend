
import React from "react";
import AuthForm from "~/components/authForm";

export default function Signin(){
    const handleSignin = (email:string, pass:string) => {
        console.log(email)
    }

    return (
        <>
        <AuthForm 
        onSubmit={handleSignin} 
        formTitle="Sign in to your account"
        buttonTitle="Sign in"
        />
        </>
    );
};
