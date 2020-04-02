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
import { useForm } from "../hooks/FormHook";

export const LandingPage = props => {
  const signIn = () => {
    console.log("firebase");
  };
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { inputs, handleSubmit, handleInputChange } = useForm(signIn);

  console.log(inputs);

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
                <Form onSubmit={handleSubmit}>
                  <FormField label="email">
                    <TextInput
                      placeholder="your awesome email"
                      name="email"
                      value={inputs.email}
                      onChange={handleInputChange}
                    ></TextInput>
                  </FormField>
                  <FormField label="password">
                    <TextInput
                      placeholder="your super secret password"
                      name="password"
                      value={inputs.password}
                      onChange={handleInputChange}
                    ></TextInput>
                  </FormField>
                  <Button type="submit" label="sign in" />
                </Form>
              </Tab>
              <Tab title="Sign Up">
                <Form>
                  <FormField label="email">
                    <TextInput
                      placeholder="your awesome email"
                      name="email"
                      value={inputs.email}
                      onChange={handleInputChange}
                    ></TextInput>
                  </FormField>
                  <FormField
                    label="password"
                    name="firstPassword"
                    value={inputs.firstPassword}
                    onChange={handleInputChange}
                  >
                    <TextInput
                      placeholder="your super secret password"
                      name="secondPassword"
                      value={inputs.secondPassword}
                      onChange={handleInputChange}
                    ></TextInput>
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
