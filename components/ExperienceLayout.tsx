import { Text, Button } from '@nextui-org/react';

interface ExperienceLayoutProps {}

const ExperienceLayout = ({}: ExperienceLayoutProps) => {
  return (
    // ! Make it look like the projects page but with a single button
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '300px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Text h1>My Experience</Text>
        </div>

        <hr
          style={{
            marginTop: '5px',
            marginBottom: '50px',
            marginLeft: '50px',
            marginRight: '50px',
            height: '2px',
          }}
        />
      </div>

      <hr style={{ marginLeft: '50px', marginRight: '50px', height: '2px' }} />

      <Button
        css={{ width: '400px', height: '600px' }}
        bordered
        color="secondary"
        auto
      >
        Experience Section Coming Soon
      </Button>
    </div>
  );
};

export default ExperienceLayout;
