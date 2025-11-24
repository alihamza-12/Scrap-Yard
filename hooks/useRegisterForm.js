import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useUserRegisterMutation } from "../store/apiSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../store/slices/authSlice";

//Zod Schema
const schema = z
  .object({
    fullName: z.string().min(3, { message: "Atleast 3 Words" }),
    email: z.string().email({ message: "InValid Email Address" }),
    address: z.string({ message: "Address Required" }),
    phoneNo: z
      .string()
      .max(11, { message: "Enter Correct 11 Digits for Phone Number" }),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password cannot exceed 32 characters")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/\d/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
    confirmPass: z
      .string()
      .min(8, { message: "InValid Password Minimum 8 characters" }),
    role: z.enum(["buyer", "seller"], { message: "Please Choice the Role" }),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "Password donot Match",
    path: ["confirmPass"],
  });

const useRegisterForm = () => {
  //Store Dispatch
  const dispatch = useDispatch();
  //Store useSelector
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  //state Variable
  const [active, setActive] = useState("");
  //RTK query Mutation
  const [userRegister, { error }] = useUserRegisterMutation();

  //SetUp React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const setHandleRole = (role) => {
    setActive(role);
    setValue("role", role);
  };
  const onSubmit = async (data) => {
    // console.log(data);
    const userResponse = await userRegister({
      Email: data.email,
      Password: data.password,
      FullName: data.fullName,
      Address: data.address,
      PhoneNo: data.phoneNo,
      Role: data.role,
    }).unwrap();
    //Store the Api response in the Store
    //Dispatch
    // console.log(userResponse)
    dispatch(
      setCredentials({
        user: {
          FullName: userResponse.FullName,
          Address: userResponse.Address,
          Email: userResponse.Email,
          PhoneNo: userResponse.PhoneNo,
          Role: userResponse.Role,
          _id: userResponse._id,
          transactions: userResponse.transactions,
        },
        token: userResponse.token,
      })
    );
    // console.log(
    //   "Registration successful: User:",
    //   {
    //     FullName: userResponse.FullName,
    //     Address: userResponse.Address,
    //     Email: userResponse.Email,
    //     PhoneNo: userResponse.PhoneNo,
    //     Role: userResponse.Role,
    //     _id: userResponse._id,
    //     transactions: userResponse.transactions,
    //   },
    //   "Token:",
    //   userResponse.token
    // );
  };
  return {
    register,
    handleSubmit,
    errors,
    active,
    setHandleRole,
    onSubmit,
    error,
  };
};

export default useRegisterForm;
