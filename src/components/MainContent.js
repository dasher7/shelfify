import React, { useContext, useState } from "react";
import { GlobalContext } from "../store/GlobalStore";
import { useForm } from "../hooks/FormHook";
import {
  Box,
  Button,
  Layer,
  Heading,
  Form,
  FormField,
  TextArea,
  Select
} from "grommet";
import { Card } from "./Card";
import { AddCircle, FormClose } from "grommet-icons";

export const MainContent = props => {
  const { categories, addCategoryElement } = useContext(GlobalContext);
  const [showNewCardForm, setShoeNewCardForm] = useState(false);
  const { inputs, handleSubmit, handleInputChange } = useForm(
    addCategoryElement
  );

  return (
    <Box
      flex
      pad="medium"
      align="start"
      gap="small"
      overflow="auto"
      background={{ color: "#2C3743" }}
    >
      <Box direction="row" alignSelf="end" pad={{ right: "small" }}>
        <Button
          icon={<AddCircle></AddCircle>}
          label="Add Card"
          onClick={() => setShoeNewCardForm(true)}
        ></Button>
      </Box>
      <Box gap="medium" direction="row">
        {/**overflow="auto" */}
        <Card />
        <Card />
      </Box>
      {/*  <Box gap="medium" direction="row" overflow="auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </Box> */}
      {showNewCardForm && (
        <Layer>
          <Box direction="row" alignSelf="end" gap="small">
            <Button
              icon={<FormClose></FormClose>}
              onClick={() => setShoeNewCardForm(false)}
            ></Button>
          </Box>
          <Box pad="small">
            <Heading level="3">Add Card</Heading>
            <Form onSubmit={handleSubmit}>
              <FormField
                name="title"
                label="Title"
                value={inputs.title}
                onChange={handleInputChange}
              ></FormField>
              <FormField
                name="description"
                label="Description"
                component={TextArea}
                value={inputs.description}
                onChange={handleInputChange}
              ></FormField>
              <FormField
                name="category"
                label="Category"
                component={Select}
                options={categories.map(category => category)}
                value={inputs.category}
                onChange={handleInputChange}
              ></FormField>
              <Button type="submit" label="save"></Button>
            </Form>
          </Box>
        </Layer>
      )}
    </Box>
  );
};
