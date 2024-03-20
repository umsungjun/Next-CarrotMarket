import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import useUser from "@/libs/client/useUser";
import { NextPage } from "next";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface EditProfileForm {
  email?: string;
  phone?: string;
  formErrors?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<EditProfileForm>();

  useEffect(() => {
    if (user?.email) {
      setValue("email", user.email);
    }
    if (user?.phone) {
      setValue("email", user.phone);
    }
  }, [user, setValue]);

  const onValid = ({ email, phone }: EditProfileForm) => {
    if (email === "" && phone === "") {
      setError("formErrors", {
        message: "이메일 또는 휴대폰 번호가 필수입력입니다.",
      });
    }
  };
  return (
    <Layout title="프로필 수정" canGoBack>
      <form className=" px-4 space-y-4" onSubmit={handleSubmit(onValid)}>
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
          >
            프로필 이미지 변경
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <div className="space-y-1">
          <Input
            register={register("email")}
            required={false}
            type="email"
            label="이메일"
            name="email"
            kind="text"
          />
        </div>
        <div className="space-y-1">
          <Input
            register={register("phone")}
            required={false}
            type="number"
            label="휴대폰 번호"
            name="phone"
            kind="phone"
          />
          <div />
        </div>
        {errors.formErrors ? (
          <span className="my-2 font-medium text-center text-red-500 block">
            {errors.formErrors.message}
          </span>
        ) : null}
        <Button text="프로필 수정" />
      </form>
    </Layout>
  );
};

export default EditProfile;
