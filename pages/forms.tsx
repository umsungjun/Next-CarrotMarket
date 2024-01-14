import { useForm } from "react-hook-form";

function Forms() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <form className="flex flex-col">
      <input
        {...register("userName")}
        type="text"
        placeholder="User Name"
        required
      />
      <input {...register("email")} type="eamil" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create" />
    </form>
  );
}

export default Forms;
