// import React from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./MovieInputForm.css";

// const MovieInputForm = () => {
//   return (
//     <div className="form-container">
//       <Form>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Label>Title</Form.Label>
//           <Form.Control placeholder="Title" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//           <Form.Label>Opening Text</Form.Label>
//           <Form.Control as="textarea" rows={3} />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Label>Release Date</Form.Label>
//           <Form.Control placeholder="Release Date" />
//         </Form.Group>
//       </Form>
//       <Button variant="primary">Add Movie</Button>
//     </div>
//   );
// };

// export default MovieInputForm;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./MovieInputForm.css";

const MovieInputForm = () => {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleAddMovie = () => {
    const newMovieObj = {
      title: title,
      openingText: openingText,
      releaseDate: releaseDate,
    };
    console.log(newMovieObj);
  };

  return (
    <div className="form-container">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Opening Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={openingText}
            onChange={(e) => setOpeningText(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Release Date</Form.Label>
          <Form.Control
            placeholder="Release Date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={handleAddMovie}>
        Add Movie
      </Button>
    </div>
  );
};

export default MovieInputForm;
