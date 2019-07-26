import React from 'react';
import { Layout } from '../../components'
import { useSelector } from 'react-redux';

export default function Home() {
  const myProjects = useSelector(state => state.listOfCategories);
  console.log('eu sou um log', myProjects);
  
  return (
    <Layout>
      {myProjects.map(project => <li key={project}>{project}</li>)}
    </Layout>
  );
}


