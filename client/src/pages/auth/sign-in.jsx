import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useLoginMutation } from "@/features/auth/authApi";

export function SignIn() {

  const [login] = useLoginMutation()
  const [data,setData]=useState({
    password:'',email:''
  })

  const handleLogin =()=>{
    console.log(data);
    login(data)
  }

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            // className="mb-4 grid h-28 place-items-center"
          >
            
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="pt-6 pb-1 text-center">
              <Typography variant="h3" color="Black">
                Sign In
              </Typography>
            </div>
            <Input onChange={(e)=>setData({...data,email:e.target.value})} type="email" label="Email" size="lg" />
            <Input onChange={(e)=>setData({...data,password:e.target.value})} type="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleLogin} variant="gradient" fullWidth>
              Sign In
            </Button>
           
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
