import { useState } from "react";
import AuthWrapper from "./AuthWrapper";
import SocialLogin from "./SocialLogin";
import { usePreferencesStore } from "@/store/preferences.store";
import { useUiStore } from "@/store/ui.store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schema";
import { useTranslations } from "next-intl";
import Button from "@/components/templates/form/Button";
import ErrorMessage from "@/components/templates/form/ErrorMessage";
import InputText from "@/components/templates/form/InputText";
import InputPass from "@/components/templates/form/InputPass";

/*
Info: Only this user and password is valid
User Name: user@gmail.com
Password: 123456
*/

const VALID_USER = "user@gmail.com";
const VALID_PASS = "123456";

const Login = ({ setAuthType }) => {
  const t = useTranslations("auth");
  const [isLoading, setIsLoading] = useState(false);
  const { setPreferences } = usePreferencesStore();
  const { setUi } = useUiStore();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: VALID_USER,
      password: VALID_PASS,
    },
  });

  function handleLogin(data) {
    setIsLoading(true);
    setTimeout(() => {
      if (data.email === VALID_USER && data.password === VALID_PASS) {
        setPreferences({ isAuth: true });
        setUi({ isAuthModalOpen: false });
      } else {
        setError("root", {
          type: "manual",
          message: "Invalid email or password",
        });
      }

      setIsLoading(false);
    }, 2000);

    console.log("Login Attempt", data);
  }

  return (
    <AuthWrapper>
      <div className="account-wrapper">
        <h2 className="account-title">{t("logIn")}</h2>

        <form onSubmit={handleSubmit(handleLogin)} className="account-form">
          <InputText
            register={register}
            name="email"
            errors={errors}
            label={t("email")}
            type="text"
          />

          <InputPass
            register={register}
            name="password"
            errors={errors}
            label={t("password")}
          />

          <ErrorMessage className="my-1" message={errors.root?.message} />

          <Button
            isLoading={isLoading}
            type="submit"
            className="btn btn--base w-100"
          >
            {t("logIn")}
          </Button>
        </form>

        <div className="account-social">
          <div className="account-social-title">
            <span className="text">{t("orLogInWith")}</span>
          </div>
          <SocialLogin />
        </div>

        <div className="text-center">
          <p className="account-link" onClick={() => setAuthType("reset")}>
            {t("forgotPassword")}
          </p>
        </div>

        <div className="account-external">
          {t("newToGoldriders")}
          <button
            onClick={() => setAuthType("register")}
            className="account-external-link"
          >
            {t("signUp")}
          </button>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Login;
