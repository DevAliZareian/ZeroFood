import { useParams } from "react-router-dom";
import Basket from "./tools/Basket";
import Form from "./interface/Form";
import Information from "./interface/Information";
import Menu from "./interface/Menu";
import { useFetchDataOnLoad } from "../../../hooks/useFetchDataOnLoad";
import LoginForm from "../../authentication/LoginForm";
import { usePopup } from "../../../contexts/PopupContext";
import { BASE_URL } from "../../../utils/constants";

export default function Page() {
  let { id } = useParams();
  const { popup } = usePopup();
  const { data, isPending, error } = useFetchDataOnLoad(`${BASE_URL}/detail/rest?id=${id}`, id);
  console.log(data);
  return (
    <>
      {popup.loginForm && <LoginForm />}
      <Form data={data} isPending={isPending} error={error}>
        <Information data={data} />
        <Menu data={data} />
        <Basket />
      </Form>
    </>
  );
}
