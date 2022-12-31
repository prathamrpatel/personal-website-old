import type { NextPage } from 'next';
import ContactLayout from '../components/ContactLayout/ContactLayout';
import ExperienceLayout from '../components/ExperienceLayout';
import HomeLayout from '../components/HomeLayout';
import NavBar from '../components/NavBar';
import ProjectLayout from '../components/ProjectLayout';

const Index: NextPage = () => {
  return (
    <>
      <NavBar />
      <HomeLayout />
      <ProjectLayout />
      <ContactLayout />
      <ExperienceLayout />
    </>
  );
};

export default Index;
