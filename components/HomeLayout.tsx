import { Text, Button } from '@nextui-org/react';
import styles from '../styles/HomeLayout.module.css';

interface HomeLayoutProps {}

const HomeLayout = ({}: HomeLayoutProps) => {
  return (
    <div className={styles.parent}>
      {/* <Button bordered color="secondary" auto className={styles.button}>
        Insert Self Portrait Here
      </Button> */}

      <div className={styles.textDiv}>
        <Text h4>
          Hi. I am Pratham Patel. I currently attend The Georgia Institute of
          Technology as a double math and computer science major. I taught
          myself how to code in high school and have kept up with it since then.
          My favorite technologies are TypeScript, React, GraphQL, and Node.js.
          I am currently learning how to create a server on a Linux virtual
          machine to which I can deploy my projects. Until then, Heroku will do.
          My goal right now is to learn machine learing with Python.
        </Text>
      </div>
    </div>
  );
};

export default HomeLayout;
