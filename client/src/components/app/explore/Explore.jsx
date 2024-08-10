import Header from "../../environment/Header";
import Filter from "./tools/Filter";
import Restaurant from "../cart/Restaurant";
import Container from "./interface/Container";
import Main from "./interface/Main";
import SequentialFilter from "./tools/SequentialFilter";
import DataSection from "./interface/DataSection";
import LoginForm from "../../authentication/LoginForm";
import { usePopup } from "../../../contexts/PopupContext";
import Restaurants from "./tools/Restaurants";
export default function Explore() {
  const { popup } = usePopup();
  return (
    <>
      {popup.loginForm && <LoginForm />}
      <Container>
        <Header />
        <Main>
          <SequentialFilter />
          <DataSection>
            <Filter />
            <Restaurants />
          </DataSection>
        </Main>
      </Container>
    </>
  );
}
