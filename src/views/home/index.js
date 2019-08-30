import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components";

export default function Home() {
  return (
    <Layout>
      <div className="welComeContainer" >
        <h1>Fornecemos tecnologias para agencias de marketing e publicidade</h1>
        <h3>Aplicativos, Sistemas, Sites e E-commerce</h3>
      </div>
      <Link className="gotoProjects" to="/projects">
        Ver projetos desenvolvidos
      </Link>
    </Layout>
  );
}
