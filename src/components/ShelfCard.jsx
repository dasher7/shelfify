import React from "react";
import { Card } from "antd";
import "../css/shelfcard.css";

const { Meta } = Card;

/**
 * TODO: build the cards with the props -- DONE
 * TODO: handle responsiveness of the cards
 * TODO: handle the render of the image or the add button icon
 * TODO: handle user input in the form for adding a new card -- DONE
 * TODO: handle user input via custom hook (should be shared with the Sidebar one)
 * TODO: show the form to add the button when the add card got clicked -- DONE
 * TODO: save the card in the form in the global store -- DONE
 * TODO: use the category prop in order to set the proper basic image (via css)
 */

export const ShelfCard = ({ title, description, category, image, onclick }) => {
  return (
    <Card
      hoverable
      style={{ width: 240, margin: 10 }}
      cover={
        <img
          className="cover-image"
          alt="example"
          src="https://cdn.pixabay.com/photo/2017/03/19/03/51/material-icon-2155448_1280.png"
        />
      }
      onClick={onclick}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};
