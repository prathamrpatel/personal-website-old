import ProjectCard from './ProjectCard';
import { Text } from '@nextui-org/react';
import styles from '../styles/ProjectLayout.module.css';
import { useEffect, useState } from 'react';

interface ProjectLayoutProps {}

const ProjectLayout = ({}: ProjectLayoutProps) => {
  const projects = [
    {
      title: 'Headline Archive App',
      imagePath: '/images/headline-archive.jpeg',
      dateCreated: '12/22/22',
      url: 'https://headline-archive-fe.herokuapp.com/',
    },
    {
      title: 'Full Stack Blogging Site',
      imagePath: '/images/blogging-site.jpeg',
      dateCreated: '10/21/22',
      url: 'https://blogging-site-frontend.herokuapp.com/',
    },
    {
      title: 'Basic Todo List App',
      imagePath: '/images/todo-list.png',
      dateCreated: '8/17/21',
      url: 'https://protected-depths-21768.herokuapp.com/',
    },
  ];
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.outerWidth);
  }, []);

  return (
    <div id="projects" style={width <= 650 ? { height: '935px' } : {}}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Text h1>My Projects</Text>
      </div>

      <hr style={{ marginLeft: '50px', marginRight: '50px', height: '2px' }} />

      <div className={styles.flexParent}>
        <div className={styles.gridParent}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
