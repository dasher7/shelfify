import React, { useContext, useState } from "react";
import { Box, Button, Form, FormField, Heading } from "grommet";
import { AddCircle, FormClose } from "grommet-icons";
import { GlobalContext } from "../store/GlobalStore";

export const Sidebar = props => {
  const { categories, addCategory, removeCategory } = useContext(GlobalContext);
  const [clickCategory, setClickCategory] = useState("");
  const [isHover, setIsHover] = useState("");
  const [formCategoryValue, setFormCategoryValue] = useState("");

  return (
    <Box
      direction="column-reverse"
      width="medium"
      background={{ color: "#19202C" }}
    >
      {/* Bottom field to add category */}
      <Box pad="small" align="center">
        <Form onSubmit={() => addCategory(formCategoryValue)}>
          {/* Text field */}
          <FormField
            align="center"
            placeholder="type new category here"
            onChange={event => setFormCategoryValue(event.target.value)}
            plain={false}
          />
          {/* Button to add category */}
          <Box pad="small" align="center">
            <Button
              icon={<AddCircle />}
              label="add category"
              color="white"
              type="submit"
            />
          </Box>
        </Form>
      </Box>

      {/* List of category */}
      <Box
        flex
        height="small"
        width="medium"
        background={{ color: "#3D6574" }}
        align="center"
      >
        {categories.map((categoryName, index) => {
          return (
            <Box
              key={categoryName}
              direction="row"
              gap="small"
              onMouseEnter={() => setIsHover(categoryName)}
              onMouseLeave={() => setIsHover("")}
            >
              <Button
                onClick={() => setClickCategory(categoryName)}
                focusIndicator={false}
              >
                <Heading level={clickCategory === categoryName ? "2" : "3"}>
                  {categoryName}
                </Heading>
              </Button>
              {isHover === categoryName && (
                <Button
                  icon={<FormClose />}
                  onClick={() => removeCategory(categoryName)}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
