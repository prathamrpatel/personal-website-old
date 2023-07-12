import { Container, Text } from '@nextui-org/react';
import LinkedInCard from './LinkedInCard';
import EmailCard from './EmailCard';
import GitHubCard from './GitHubCard';

interface ContactLayoutProps {}

const ContactLayout = ({}: ContactLayoutProps) => {
  return (
    <div id="contact">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Text h1>Contact Me</Text>
      </div>

      <hr style={{ marginLeft: '50px', marginRight: '50px', height: '2px' }} />
      <Container
        css={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '20px',
          gap: '30px',
        }}
      >
        <LinkedInCard />
        <EmailCard />
        <GitHubCard />
      </Container>
    </div>
  );
};

export default ContactLayout;
