import React, { useContext, useState } from "react";
import { GlobalContext } from "../../store/GlobalStore";
import { useForm } from "../../hooks/FormHook";
import {
  Box,
  Button,
  Layer,
  Heading,
  Form,
  FormField,
  TextArea
} from "grommet";
import { FormClose } from "grommet-icons";

export const CardForm = () => {
  const { categories, addCategoryElement } = useContext(GlobalContext);
  const [showNewCardForm, setShoeNewCardForm] = useState(false);
  const { inputs, handleSubmit, handleInputChange } = useForm(
    addCategoryElement
  );

  return (
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
  );
};
