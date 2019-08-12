import React from 'react';
import { Layout } from '../../components'
import * as firebase from 'firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

export default function Projects() {
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('projects'),
  );
  console.log(value);
  console.log(error)
  return (
    <Layout>
      <h1>
        Projetos
      </h1>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            Collection:{' '}
            {value.docs.map(doc => (
              <React.Fragment key={doc.id}>
                {JSON.stringify(doc.data())},{' '}
              </React.Fragment>
            ))}
          </span>
        )}
    </Layout>
  );
}


