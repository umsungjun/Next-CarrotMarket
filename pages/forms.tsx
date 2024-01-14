import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  userName: string;
  email: string;
  password: string;
  errors?: string;
}

function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    reset,
    resetField,
  } = useForm<LoginForm>({
    mode: "onChange",
  });

  const onValid = (data: LoginForm) => {
    // form내의 모든 input이 정상적으로 입력되었을 때 실행되는 함수
    console.log("I'am Valid");
    // setError('userName',{message:'이미 존재하는 계정'}) <-- 중복 ID error handling
  };
  const onInvalid = (errors: FieldErrors) => {
    // form내의 하나의 input이라도 정상적입력되지 않았을 때 실행되는 함수
    console.log(errors);
    reset(); // invalid하면 모든 input을 초기화 시킬 수 있음
  };

  return (
    <form
      className="flex flex-col gap-2 px-2 mt-2"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
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
      <span className="text-red-500">{errors.userName?.message}</span>
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
      <span className="text-red-500">{errors.email?.message}</span>
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      <span className="text-red-500">{errors.password?.message}</span>
      <input
        className="w-full bg-blue-500 py-2 text-white"
        type="submit"
        value="Create"
      />
    </form>
  );
}

export default Forms;
