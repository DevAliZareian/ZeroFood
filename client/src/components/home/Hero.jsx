import PizzaSection from "./interface/PizzaSection";
import CategorySection from "./interface/CategorySection";
import Container from "./interface/Container";
import Main from "./interface/Main";
import LoginForm from "../authentication/LoginForm";
import Map from "../environment/Map";
import { usePopup } from "../../contexts/PopupContext";

export default function Hero() {
  const { popup } = usePopup();
  return (
    <Container>
      {popup.Map && <Map />}
      {popup.loginForm && <LoginForm />}
      <Main>
        <PizzaSection />
        <CategorySection />
      </Main>
    </Container>
  );
}
