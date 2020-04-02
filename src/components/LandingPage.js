import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Paragraph,
  Button,
  Layer,
  Tabs,
  Tab,
  Form,
  FormField,
  TextInput
} from "grommet";
import { FormClose } from "grommet-icons";

export const LandingPage = props => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
    <Box
      align="center"
      justify="center"
      direction="row"
      height="100vh"
      width="100vw"
      gap="medium"
      background={{ color: "#2C3743" }}
    >
      <Box align="start" gap="medium">
        <Heading level="1">Shelfify</Heading>
        <Paragraph>
          A general pourpouse self-organitor, for all of yours interest
        </Paragraph>
        <Box direction="row" gap="medium">
          <Button
            label="Sign In"
            onClick={() => {
              setShowLoginForm(true);
            }}
          ></Button>
          <Button
            label="Sign Up"
            onClick={() => {
              setShowLoginForm(true);
            }}
          ></Button>
        </Box>
      </Box>
      <Box width="large" height="large">
        <Image src={require("../images/landing.png")} fit="contain" />
      </Box>

      {showLoginForm && (
        <Layer>
          <Box pad="medium">
            <Box direction="row" alignSelf="end">
              <Button
                icon={<FormClose />}
                onClick={() => setShowLoginForm(false)}
              />
            </Box>
            <Tabs>
              <Tab title="Sign In">
                <Form>
                  <FormField label="email">
                    <TextInput placeholder="your awsome email"></TextInput>
                  </FormField>
                  <FormField label="password">
                    <TextInput placeholder="your super secret password"></TextInput>
                  </FormField>
                  <Button type="submit" label="sign in" />
                </Form>
              </Tab>
              <Tab title="Sign Up">
                <Form>
                  <FormField label="email">
                    <TextInput placeholder="your awsome email"></TextInput>
                  </FormField>
                  <FormField label="password">
                    <TextInput placeholder="your super secret password"></TextInput>
                  </FormField>
                  <FormField label="confirm password">
                    <TextInput placeholder="your super secret password"></TextInput>
                  </FormField>
                  <Button type="submit" label="sign in" />
                </Form>
              </Tab>
            </Tabs>
          </Box>
        </Layer>
      )}
    </Box>
  );
};
