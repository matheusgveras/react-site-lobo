import React from 'react';
import { Layout } from '../../components'
export default function Contact() {
  return (
    <Layout>
      <div className="row">
        <h1>
          Contato
        </h1>
      </div>
      <div className="row">
        <form onSubmit={() => {}}>
          <label>
            Name:
          </label>
          <input type="text" onChange={() => {}} />
          <input type="submit" value="Submit" />
        </form>
      </div>

    </Layout>
  );
}