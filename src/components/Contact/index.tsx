import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Tag } from "../Tag";
import { ContactComponent, ContactForm } from "./styles";

interface IFormInput {
  name: String;
  email: String;
  message: String;
}

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  function handleSendMessage(data: IFormInput) {
    const templateParams = {
      from_name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        "service_lprck6b",
        "template_lk9yloc",
        templateParams,
        "ADOtqmkmtd6XNv1xm"
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
          reset();
        },
        (error) => {
          alert("Falha ao enviar mensagem!");
        }
      );
  }

  return (
    <ContactComponent id="contact">
      <h2>Contato</h2>

      <p>
        Envie uma mensagem pelo formulário abaixo. Responderei o mais breve
        possível.
      </p>

      <ContactForm onSubmit={handleSubmit(handleSendMessage)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true, maxLength: 70 })}
          />
          {errors.name && <span>Preencha o seu nome!</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
          />
          {errors.email && <span>Preencha o seu email!</span>}
        </div>

        <div>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && <span>Escreva uma mensagem!</span>}
        </div>

        <button>
          <Tag text="Enviar mensagem" changeBackground={true} />
        </button>
      </ContactForm>
    </ContactComponent>
  );
}
