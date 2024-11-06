// components/VerifyEmail.tsx
import React from 'react';
import { Button, Body, Container, Head, Html, Preview, Text } from '@react-email/components';

type VerifyEmailProps = {
  username: string;
  verifyCode: string;
};

export const VerifyEmail: React.FC<VerifyEmailProps> = ({ username, verifyCode }) => (
  <Html>
    <Head />
    <Preview>Verify your email address</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={heading}>Hi {username},</Text>
        <Text style={text}>
          Thanks for signing up! Please verify your email address by clicking the button below.
        </Text>
        <Text style={text}>
          {verifyCode}
        </Text>

        <Button style={button}>
          Verify Email
        </Button>
        <Text style={footer}>If you didn’t sign up, you can safely ignore this email.</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f4f7',
  padding: '20px',
};

const container = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '500px',
  margin: '0 auto',
};

const heading = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const text = {
  fontSize: '14px',
  marginBottom: '16px',
  color: '#333333',
};

const button = {
  backgroundColor: '#007bff',
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '4px',
  textDecoration: 'none',
  display: 'inline-block',
};

const footer = {
  fontSize: '12px',
  color: '#666666',
  marginTop: '20px',
};
