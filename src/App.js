import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SkillsList from './components/SkillsList';
import ServicesList from './components/ServicesList';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import ResearchThemaList from './components/ResearchThemaList';
import yaml from 'js-yaml';
import  projects_path from './yaml/projects.yaml';
import  skills_path from './yaml/skills.yaml';
import  resarchthemas_path from './yaml/researchthemas.yaml';
import  services_path from './yaml/services.yaml';


async function loadYamlFromPublic(path) {
  try {
    const response = await fetch(path);
    const text = await response.text();
    const data = yaml.load(text);
    return data;
  } catch (error) {
    console.error(`YAMLファイル読み込みエラー: ${path}`, error);
    return null;
  }
}

function App() {
  
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [resarchthemas ,setResarch_themas ] = useState([]);
  const [services, setServices] = useState([]);


  useEffect(() => {
    async function fetchData() {
      
      const project = await loadYamlFromPublic(projects_path);
      if (project) setProjects(project);

      const skill = await loadYamlFromPublic(skills_path);
      if (skill) setSkills(skill);

      const resarchthema = await loadYamlFromPublic(resarchthemas_path);
      if (resarchthema) setResarch_themas(resarchthema);

      const service = await loadYamlFromPublic(services_path);
      if (service) setServices(service);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header/>
      <Hero/>
      <About />
      <SkillsList skills={skills}/>
      <ServicesList services={services}/>
      <ResearchThemaList resarchthemas={resarchthemas}/>
      <ProjectList projects={projects}/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
