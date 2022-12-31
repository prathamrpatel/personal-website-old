import { Card, Text, Col, Row, Button } from '@nextui-org/react';
import NextLink from 'next/link';

interface LinkedInCardProps {}

const LinkedInCard = ({}: LinkedInCardProps) => {
  return (
    <Card css={{ w: '400px', h: '600px' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="black">
            Visit my
          </Text>
          <Text h3 color="black">
            LinkedIn
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="images/linkedin.jpeg"
          width="100%"
          height="100%"
          objectFit="cover"
          alt="LinkedIn Card"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#ffffff66',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row justify="center">
              <NextLink
                href="https://www.linkedin.com/in/prathamrpatel/"
                target="_blank"
              >
                <Button flat auto rounded color="secondary">
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Visit profile
                  </Text>
                </Button>
              </NextLink>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default LinkedInCard;
