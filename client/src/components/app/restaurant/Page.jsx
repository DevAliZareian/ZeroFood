import { useParams } from "react-router-dom";
import Basket from "./tools/Basket";
import Form from "./interface/Form";
import Information from "./interface/Information";
import Menu from "./interface/Menu";
import { useFetchDataOnLoad } from "../../../hooks/useFetchDataOnLoad";
import LoginForm from "../../authentication/LoginForm";
import { usePopup } from "../../../contexts/PopupContext";
import { BASE_URL } from "../../../utils/constants";
import { useState } from "react";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  let { id } = useParams();
  const { popup } = usePopup();
  const { data, isPending, error } = useFetchDataOnLoad(`${BASE_URL}/detail/rest?id=${id}`, id);
  return (
    <>
      {popup.loginForm && <LoginForm />}
      <Form data={data} isPending={isPending} error={error}>
        <Information selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} data={data} />
        <Menu selectedCategory={selectedCategory} data={data} />
        <Basket delivery={data} />
      </Form>
    </>
  );
}
