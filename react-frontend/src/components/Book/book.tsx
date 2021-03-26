import React from "react";
import Card from "react-bootstrap/Card";
import BookProps from "../../models/book";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Book: React.FC<BookProps> = ({
  id,
  Title_DistinctivetitlebookCovertitle_TitleText,
  Location,
  Cover_File,
  Publisher_PublisherName,
}) => {
  const imageSource = `https://www.perlego.com/${Location}/${Cover_File}`;
  return (
    <>
      <Card key={id}>
        <Card.Img src={imageSource} alt="Book image " />
        <Card.Body>
          <Row >
            <Col><b>{Title_DistinctivetitlebookCovertitle_TitleText}</b></Col>
          </Row>
          <Row >
            <Col>{Publisher_PublisherName}</Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Book;
