import React, { useState } from "react";

import api from "../../services/api";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";

import { FiArrowLeft } from "react-icons/fi";
import {
  Container,
  Content,
  Section,
  Image,
  Title,
  Text,
  Form,
  InputGroup
} from "./styles";

import logoImg from "../../assets/logo.svg";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  const handleRegister = async e => {
    e.preventDefault();
    const data = { name, email, whatsapp, city, uf };

    try {
      const response = await api.post("/ongs", data);

      localStorage.setItem("ongId", response.data.id);

      history.push("/", { sucess: true });
    } catch (error) {
      toast.error("Erro ao tentar realizar o cadastro, tente novamente!");
    }
  };

  return (
    <Container>
      <Content>
        <Section>
          <Image src={logoImg} alt="Be The Hero" />
          <Title>Cadastro</Title>
          <Text>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </Text>
          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já sou cadastrado
          </Link>
        </Section>
        <Form onSubmit={handleRegister}>
          <Input
            placeholder="Nome da Ong"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <InputGroup>
            <Input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <Input
              placeholder="UF"
              width={"80px"}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </InputGroup>
          <Button text={"Cadastrar"} />
        </Form>
      </Content>
      <ToastContainer />
    </Container>
  );
}
