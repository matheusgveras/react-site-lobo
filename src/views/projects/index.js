import React from "react";
import { Layout } from "../../components";
import { useCollection } from "react-firebase-hooks/firestore";
import * as firebase from "firebase";
import ProjectItem from "./project-item";

export default function Projects() {
  
  const [value, loading, error] = useCollection(
    firebase.firestore().collection("projects")
  );

  return ( 
    <Layout>
      <h1>Projetos</h1>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <span>
          {value.docs.map(doc => (
            <React.Fragment key={doc.id}>
              <ProjectItem project={doc.data()} />
            </React.Fragment>
          ))}
        </span>
      )}
    </Layout>
  );
}
