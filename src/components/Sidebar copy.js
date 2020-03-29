import React, { useContext, useState } from "react";
import { GlobalContext } from "../store/GlobalStore";
import { Box, Heading, Button, Form, FormField } from "grommet";
import { AddCircle, FormClose, FastForward } from "grommet-icons";

export const Sidebar = props => {
  const { categories, addCategory, removeCategory } = useContext(GlobalContext);
  const [clicked, setClicked] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [newCategoryValue, setNewCateogryValue] = useState("");
  console.log(categories);

  return (
    // main sidebar
    <Box
      direction="column-reverse"
      width="medium"
      background={{ color: "#19202C" }}
    >
      {/* Bottom field to add category */}
      <Box pad="small" align="center">
        <Form
          onSubmit={() => {
            addCategory(newCategoryValue);
          }}
        >
          {/* Text field */}
          <FormField
            align="center"
            placeholder="type new category here"
            value={newCategoryValue}
            onChange={event => setNewCateogryValue(event.target.value)}
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
        {categories.map((el, index) => {
          return (
            <Box
              key={index}
              direction="row"
              alignSelf="center"
              onMouseEnter={() => setIsHover(el)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Button onClick={() => setClicked(el)} focusIndicator={false}>
                <Heading level={clicked === el ? "2" : "3"}>{el}</Heading>
              </Button>
              {isHover === el && (
                <Button
                  icon={<FormClose />}
                  focusIndicator={false}
                  onClick={() => removeCategory(el)}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

/**
 * 
 * 
 *  // main sidebar
    <Box
      direction="column-reverse"
      width="medium"
      background={{ color: "#19202C" }}
    >
      {/* Bottom field to add category */}
      <Box pad="small" align="center">
        <Form
          onSubmit={() => {
            addCategory(newCategoryValue);
          }}
        >
          {/* Text field */}
          <FormField
            align="center"
            placeholder="type new category here"
            value={newCategoryValue}
            onChange={event => setNewCateogryValue(event.target.value)}
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
        {categories.map((el, index) => {
          return (
            <Box
              key={index}
              direction="row"
              alignSelf="center"
              onMouseEnter={() => setIsHover(el)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Button onClick={() => setClicked(el)} focusIndicator={false}>
                <Heading level={clicked === el ? "2" : "3"}>{el}</Heading>
              </Button>
              {isHover === el && (
                <Button
                  icon={<FormClose />}
                  focusIndicator={false}
                  onClick={() => removeCategory(el)}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
 * 
 * 
*/
