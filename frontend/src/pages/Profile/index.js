import React, { useEffect, useState } from "react";

import api from "../../services/api";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Link from "../../components/Link";

import { FiPower, FiTrash2 } from "react-icons/fi";
import {
  Container,
  Header,
  Image,
  Message,
  ButtonLogout,
  Title,
  Incidents,
  Incident,
  NameProperty,
  ValueProperty,
  ButtonDelete
} from "./styles";

import logoImg from "../../assets/logo.svg";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/profile", {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(response.data);
    };

    getData();
  }, [ongId]);

  const handleDeleteIncident = async id => {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
      toast.success("Caso deletado com sucesso!");
    } catch (err) {
      toast.error("Erro ao deletar o caso, tente novamente");
    }
  };

  const handleLogout = () => {
    localStorage.clear();

    history.push("/");
  };

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="Be The Hero" />
        <Message>Bem vinda, {ongName}</Message>
        <Link effect={"false"} to="/incidents/new">
          <Button type="button" text="Cadastrar novo caso" />
        </Link>
        <ButtonLogout onClick={handleLogout}>
          <FiPower size={18} color={"#e02041"} />
        </ButtonLogout>
      </Header>
      <Title>Casos cadastrados</Title>
      <Incidents>
        {incidents.map(incident => (
          <Incident key={incident.id}>
            <NameProperty>CASO:</NameProperty>
            <ValueProperty>{incident.title}</ValueProperty>
            <NameProperty>DESCRIÇÃO: </NameProperty>
            <ValueProperty>{incident.description}</ValueProperty>
            <NameProperty>VALOR:</NameProperty>
            <ValueProperty>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </ValueProperty>

            <ButtonDelete
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color={"#A8A8B3"} />
            </ButtonDelete>
          </Incident>
        ))}
      </Incidents>
      <ToastContainer />
    </Container>
  );
}
