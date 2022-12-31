import { Card, Text, Col, Row, Button, Popover } from '@nextui-org/react';

interface EmailCardProps {}

const EmailCard = ({}: EmailCardProps) => {
  return (
    <Card css={{ w: '400px', h: '600px' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="black">
            Contact me
          </Text>
          <Text h3 color="black">
            Email
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="images/email.jpeg"
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
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
              <Popover placement="bottom">
                <Popover.Trigger>
                  <Button
                    flat
                    auto
                    rounded
                    color="secondary"
                    onClick={() => {
                      navigator.clipboard.writeText('rprathampatel@gmail.com');
                    }}
                  >
                    <Text
                      css={{ color: 'inherit' }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Copy email to clipboard
                    </Text>
                  </Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text css={{ p: '$10' }}>Copied to clipboard</Text>
                </Popover.Content>
              </Popover>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default EmailCard;
