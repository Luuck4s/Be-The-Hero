import React, { useEffect, useState } from "react";

import api from "../../services/api";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Modal from "../../components/Modal";

import { FiLogIn } from "react-icons/fi";
import { Container, Section, Form, Image, Title } from "./styles";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Logon() {
  const ongId = localStorage.getItem("ongId");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(ongId ? ongId : "");

  const history = useHistory();

  useEffect(() => {
    if (history.location.state && history.location.state.sucess) {
      history.location.state.sucess = null;
      setShowModal(true);
    }
  }, [history.location.state]);

  const hanldeLogin = async e => {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (error) {
      toast.error("Erro ao tentar realizar o login, tente novamente!");
    }
  };

  return (
    <>
      <Container>
        <Section>
          <Image src={logoImg} alt="Be The Hero" logo />
          <Form onSubmit={hanldeLogin}>
            <Title>Faça seu logon</Title>
            <Input
              placeholder="Sua Id"
              value={id}
              onChange={e => setId(e.target.value)}
            />
            <Button type="submit" text={"Entrar"} />
            <Link to="/register">
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
            </Link>
          </Form>
        </Section>
        <Image src={heroesImg} alt="Heroes" />
        <ToastContainer />
      </Container>
      {showModal && (
        <Modal code={ongId} hanldeClose={() => setShowModal(false)} />
      )}
    </>
  );
}
