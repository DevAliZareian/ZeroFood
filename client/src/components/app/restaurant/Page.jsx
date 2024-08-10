import { useParams } from "react-router-dom";
import Basket from "./tools/Basket";
import Form from "./interface/Form";
import Information from "./interface/Information";
import Menu from "./interface/Menu";
import { useFetchDataOnLoad } from "../../../hooks/useFetchDataOnLoad";

export default function Page() {
  let { id } = useParams();
  const { data, isPending, error } = useFetchDataOnLoad(`https://8ggbxf58-3000.inc1.devtunnels.ms/detail/rest?id=${id}`, id);
  return (
    <Form data={data} isPending={isPending} error={error}>
      <Information data={data} />
      <Menu data={data} />
      <Basket />
    </Form>
  );
}
