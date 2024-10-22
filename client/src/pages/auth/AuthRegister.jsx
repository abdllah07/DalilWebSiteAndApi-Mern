import Form from "@/components/common/Form";
import { registerFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { registerUser } from "@/store/authSlice";
import { KeyRound, LogIn } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

const initialState =  {
    userName : '', 
    email : '',
    password : '', 
}

function AuthRegister() {
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch();
    const {toast} = useToast()
    const navigate = useNavigate()

 
    function onSubmit(event) {
        event.preventDefault();
        
        dispatch(registerUser(formData)).then((data) => {
            if (data?.payload?.success) {
                toast({
                    title: data?.payload?.message,
                });
                Navigate("/auth/login");
            } else {
                toast({
                    title: data?.payload?.message,
                    variant: "destructive", 
                });
            }
        });
    }

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
             <div className="flex items-center justify-center">
                <LogIn className="w-20 h-20 text-purple-950 animate-fade-in-up" />
            </div>
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tighter text-foreground">Create New Account</h1>
                    <p className="mt-2">Already have an account ?  
                    <Link className="font-medium text-primary hover:underline" to="/auth/login"> Login</Link>
                    </p>
                </div>

                <Form 
                    formControls={registerFormControls}
                    buttonText={"Sign Up"}
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={onSubmit}
                    icon={<KeyRound />}

                />
        </div>
    )
}

export default AuthRegister