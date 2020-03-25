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
  TextArea
} from "./styles";

import logoImg from "../../assets/logo.svg";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewIncident() {
  const [title, setTile] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  const handleNewIncident = async e => {
    e.preventDefault();

    if (title === "" || description === "" || value === "") {
      toast.error("É obrigatório preencher os campos!!!");
      return false;
    }

    const data = {
      title: title.trim(),
      description: description.trim(),
      value
    };

    try {
      await api.post("/incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/profile");
    } catch (err) {
      toast.error("Opa! ocorreu um erro e não foi possível criar o novo caso!");
    }
  };

  return (
    <Container>
      <Content>
        <Section>
          <Image src={logoImg} alt="Be The Hero" />
          <Title>Cadastrar novo caso</Title>
          <Text>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </Text>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </Section>
        <Form onSubmit={handleNewIncident}>
          <Input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTile(e.target.value)}
          />
          <TextArea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Input
            type={"number"}
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button text={"Cadastrar"} />
        </Form>
      </Content>
      <ToastContainer />
    </Container>
  );
}
