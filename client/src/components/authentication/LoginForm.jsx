import { useForm } from "react-hook-form";
import AuthInput from "./interface/AuthInput";
import Form from "./interface/Form";
import Submit from "./interface/Submit";
import { useLogin } from "./useLogin";
import { useAuthorization } from "./useAuthorization";
import { useState } from "react";
export default function LoginForm() {
  const [authCode, setAuthCode] = useState(false);
  const { register, handleSubmit, watch, reset } = useForm();
  const { authorization, isAuthorizationPending } = useAuthorization(setAuthCode);
  const { login, isLoginPending } = useLogin();

  function onAuthorization({ email }) {
    authorization({ email });
    reset({ email: "" });
  }
  function onLogin({ code }) {
    login({ code });
    reset({ code: "" });
  }

  return (
    <Form authCode={authCode} onAuthorization={handleSubmit(onAuthorization)} onLogin={handleSubmit(onLogin)}>
      <AuthInput watchAuthCode={watch("code")} authCode={authCode} setEmail={register} setAuthCode={register} />
      <Submit authCode={authCode} isLoginPending={isLoginPending} isAuthorizationPending={isAuthorizationPending} watchAuthCode={watch("code")} watchEmail={watch("email")} />
    </Form>
  );
}
