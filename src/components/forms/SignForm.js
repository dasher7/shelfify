import React, { useState } from "react";
import {
  Box,
  Layer,
  Form,
  FormField,
  Tabs,
  Tab,
  Button,
  TextInput
} from "grommet";
import { FormClose } from "grommet-icons";

export const SignForm = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
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
  );
};
