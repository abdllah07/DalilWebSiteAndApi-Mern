import Form from "@/components/common/Form";
import { loginFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/store/authSlice";
import { KeyRound, LogIn } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: '',
  password: '', 
};

function AuthLogin() {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const { toast } = useToast();

    const OnSubmit = (event) => {
        event.preventDefault();

        dispatch(loginUser(formData)).then(data => {
        if (data?.payload?.success) {
            toast({
            title: data?.payload?.message,
            });
        } else {
            toast({
            title: data?.payload?.message,
            variant: 'destructive',
            });
        }
        });
};

    return (
        <div className="mx-auto w-full max-w-md space-y-6 p-4 sm:p-6 md:p-8">
        <div className="flex items-center justify-center">
            <LogIn className="w-16 h-16 sm:w-20 sm:h-20 text-purple-950 animate-fade-in-up" />
        </div>
        <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter text-foreground">
            Sign In to your account
            </h1>
            <p className="mt-2 text-sm sm:text-base">
            Don't have an account?  
            <Link className="font-medium text-secondary hover:underline" to="/auth/register">
                Register
            </Link>
            </p>
        </div>

        <Form 
            formControls={loginFormControls}
            buttonText="Sign In"
            formData={formData}
            setFormData={setFormData}
            onSubmit={OnSubmit}
            icon={<KeyRound />}
        />
        </div>
);
}

export default AuthLogin;
