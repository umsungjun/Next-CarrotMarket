import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  userName: string;
  email: string;
  password: string;
}

function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  });

  const onValid = (data: LoginForm) => {
    console.log("I'am Valid");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  console.log(errors);
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("userName", {
          required: "UserName is required",
          minLength: {
            message: "The UserName should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="User Name"
        className={`${errors.userName ? "border-red-500" : ""}`}
      />
      {errors.userName?.message}
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      {errors.password?.message}
      <input type="submit" value="Create" />
    </form>
  );
}

export default Forms;
