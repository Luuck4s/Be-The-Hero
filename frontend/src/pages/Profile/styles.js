import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  @media (max-width: 650px) {
    max-width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  a button {
    margin-top: 0;
  }

  @media (max-width: 930px) {
    a button {
      max-width: 200px;
    }

    a {
      max-width: 200px;
    }
  }

  @media (max-width: 650px) {
    a button {
      font-size: 0.8rem;
      max-width: 160px;
    }

    a {
      max-width: 150px;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: center;
      margin: 5% 2% 0 0;
    }
  }
`;

export const Image = styled.img`
  height: 64px;
`;

export const Message = styled.span`
  font-size: 1.1rem;
  margin-left: 24px;

  @media (max-width: 930px) {
    font-size: 0.9rem;
  }
`;

export const ButtonLogout = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdcd6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  :hover {
    border-color: #999;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5% 2% 0 0;
  }
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;

  @media (max-width: 930px) {
    font-size: 1rem;
  }
`;

export const Incidents = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`;

export const Incident = styled.li`
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  position: relative;
`;

export const NameProperty = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: #41414d;

  :not(:first-child) {
    margin-top: 32px;
  }
`;

export const ValueProperty = styled.p`
  color: #737380;
  line-height: 21px;
  font-size: 0.9rem;
`;

export const ButtonDelete = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
  background: none;
  transition: opacity 0.2s;

  :hover {
    opacity: 0.8;
  }
`;
