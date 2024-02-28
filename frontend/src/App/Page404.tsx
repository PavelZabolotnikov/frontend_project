import React from 'react';
import { Container, Image } from 'react-bootstrap';

function Page404(): JSX.Element {
  return (
    <Container>
      <Image className="error" src="/SVG/404error.jpg" />
    </Container>
  );
}

export default Page404;
