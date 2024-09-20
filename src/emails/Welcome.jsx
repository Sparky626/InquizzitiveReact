import * as React from "react";
import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Heading,
    Text,
    Link,
    Hr,
    Row,
    Column,
    Img,
  } from "@react-email/components";
  export default function Email() {
    return (
      <Html>
        <Head/>
        <Preview>Bool</Preview>
        <Body>
          <Container>
            <Heading as="h1">Hello!</Heading>
            <Text>This is a test email!</Text>
            <Text>If you are receiving this email the email function works!</Text>
            <Text>
              <Link href="https://dev.inquizzitive.net/login">
                Go to the login.
              </Link>
              .
            </Text>
            <Hr />
            <Text>This email was sent by me, to myself.</Text>
          </Container>
        </Body>
      </Html>
    );
  }