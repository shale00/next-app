import React from 'react';
import {
  Body,
  Container,
  Html,
  Text,
  Link,
  Preview,
} from '@react-email/components';

// Add props to this compoenent to render content dynamically
const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body>
        <Container>
          <Text>Hellow {name}</Text>
          <Link href='www.codewithmosh.com'>www.codewithmosh.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
