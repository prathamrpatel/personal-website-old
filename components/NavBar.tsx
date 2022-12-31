import { Button, Navbar, Link, Text } from '@nextui-org/react';
import NextLink from 'next/link';

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
  const collapseItems = ['Home', 'Projects', 'Experience', 'Contact'];

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Content
        showIn="xs"
        css={{
          '@xs': {
            width: '100%',
            justifyContent: 'flex-end',
          },
        }}
      >
        <Navbar.Item>
          <Text>{'<Pratham Patel />'}</Text>
        </Navbar.Item>
      </Navbar.Content>

      <Navbar.Content
        hideIn="xs"
        css={{
          '@xs': {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
          },
        }}
      >
        <Navbar.Item>
          <Button
            auto
            shadow
            color="primary"
            ripple={false}
            onClick={(e) => {
              window.scroll({ top: 0, behavior: 'smooth' });
            }}
          >
            Home
          </Button>
        </Navbar.Item>

        <Navbar.Item>
          <Button
            auto
            shadow
            color="secondary"
            ripple={false}
            onClick={() => {
              const projects = document.getElementById('projects');
              projects?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Projects
          </Button>
        </Navbar.Item>

        <Navbar.Item>
          <Button auto shadow color="warning" ripple={false}>
            Experience
          </Button>
        </Navbar.Item>

        <Navbar.Item>
          <Button
            auto
            shadow
            color="error"
            ripple={false}
            onClick={() => {
              const contacts = document.getElementById('contact');
              contacts?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </Button>
        </Navbar.Item>
      </Navbar.Content>

      <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={index}>
            <Link
              as="div"
              color="text"
              onClick={() => {
                const section = document.getElementById(item.toLowerCase());
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
