import { useForm } from "react-hook-form";
import Email from "./interface/Email";
import Form from "./interface/Form";
import Submit from "./interface/Submit";
import { useLogin } from "./useLogin";
export default function LoginForm() {
  const { register, handleSubmit, watch } = useForm();
  const { login, isPending } = useLogin();
  function onSubmit({ email }) {
    login({ email });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Email setEmail={register} />
      <Submit loading={isPending} watch={watch("email")} />
    </Form>
  );
}
