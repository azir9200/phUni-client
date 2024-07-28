import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";
import { verifyToken } from "../utils/veryfyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "0001",
      password: "admin12345",
    },
  });
  //   const defaultValues = {
  //     userId: 'A-0002',
  //     password: 'admin123',
  //   };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  //   const onSubmit = async (data) => {
  //     console.log(data);
  //     const userInfo = {
  //       id: data.userId,
  //       password: data.password,
  //     };
  //     login(userInfo);
  //     const res = await login(userInfo).unwrap();
  //     const user = verifyToken(res.data.accessToken);
  //     console.log(user);
  //     dispatch(setUser({ user: user, token: res.data.accessToken }));
  //     navigate(`/${user.role}/dashboard`);
  //     //navigate("/");
  //   };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1> This is Login component </h1>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
