import { Card, Row, Text } from '@nextui-org/react';
import NextLink from 'next/link';

interface ProjectCardProps {
  title: string;
  imagePath: string;
  dateCreated: string;
  url: string;
}

const ProjectCard = (project: ProjectCardProps) => {
  return (
    <NextLink href={project.url} target="_blank">
      <Card isPressable css={{ height: '250px', marginBottom: '25px' }}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={project.imagePath}
            objectFit="cover"
            width="100%"
            height="100%"
            alt={project.title}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: 'flex-start' }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text b>{project.title}</Text>
            <Text
              css={{
                color: '$accents7',
                fontWeight: '$semibold',
                fontSize: '$sm',
              }}
            >
              {project.dateCreated}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </NextLink>
  );
};

export default ProjectCard;
