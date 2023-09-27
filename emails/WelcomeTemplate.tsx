import React, { CSSProperties } from 'react';
import {
  Body,
  Container,
  Tailwind,
  Html,
  Text,
  Link,
  Preview,
} from '@react-email/components';

// Add props to this component to render content dynamically
const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className='bg-white'>
          <Container>
            <Text className='font-bold text-3xl'>Hello {name}</Text>
            <Link href='www.codewithmosh.com'>www.codewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// to get intellisense, annotate the object with CSSProperties
const body: CSSProperties = {
  background: 'fff',
};

const heading: CSSProperties = {
  fontSize: '32px',
};

export default WelcomeTemplate;
