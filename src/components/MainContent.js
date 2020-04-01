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
  TextArea
} from "grommet";
import { Card } from "./Card";
import { AddCircle, FormClose } from "grommet-icons";
import { act } from "react-dom/test-utils";

export const MainContent = ({ firebase }) => {
  const { categories, cards, active, addCategoryElement } = useContext(
    GlobalContext
  );
  const [showNewCardForm, setShoeNewCardForm] = useState(false);
  const { inputs, handleSubmit, handleInputChange } = useForm(
    addCategoryElement
  );

  console.log(active);
  console.log(cards[active]);
  console.log(firebase);

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
        {cards[active].map((card, index) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            category={card.category}
          />
        ))}
        {/*     <Card />
        <Card /> */}
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
                options={categories.map(category => category)}
                value={inputs.category}
                onChange={event => handleInputChange(event)}
              ></FormField>
              <Button type="submit" label="save"></Button>
            </Form>
          </Box>
        </Layer>
      )}
    </Box>
  );
};
