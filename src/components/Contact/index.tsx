import { Tag } from "../Tag";
import { ContactComponent } from "./styles";

export function Contact() {
  return (
    <ContactComponent>
      <h2>Contato</h2>

      <p>
        Estou a disposição para quaisquer informações. Responderei o mais breve
        possível.
      </p>

      <a href="mailto:rafael.guimaraes.dev@gmail.com">
        <Tag text="Entre em contato!" changeBackground={true} />
      </a>
    </ContactComponent>
  );
}
