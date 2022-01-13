import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AddButton(props) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");
    const [tags, setTags] = useState([]);
    const [url, setURL] = useState("");

    const addLink = () => {
      props.onAddLinkProps(name, url, tags);
      setModal(false);
      setName("");
      setURL("");
      setTags([]);
    };

    const onTagChange = (i, e) => {
      const newTags = tags.slice();
      newTags[i] = {
        name: e.currentTarget.value,
      };
      setTags(newTags);
    };

    return (
        <>
          <Button
            variant="secondary"
            onClick={() => {
              console.log("clicked");
              setModal(!modal);
            }}
          >
            {" "}
            Add Link{" "}
          </Button>
          <Modal show={modal}>
          <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <p>Modal body text goes here.</p>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <br />
          <label>URL:</label>
          <br />
          <input
            type="text"
            value={url}
            onChange={(e) => setURL(e.currentTarget.value)}
          />
          <br />
          <label>Tags:</label>
          <br />
          {/* Do not need the inline conditional? */}
          {tags && tags.length > 0
            ? tags.map((tag, i) => {
                return (
                  <input
                    key={i}
                    type="text"
                    value={tag.name}
                    onChange={(e) => onTagChange(i, e)}
                  />
                );
              })
            : "No Tags"}
          <br />
          <Button
            variant="secondary"
            onClick={() => setTags(tags.concat([{ name: "" }]))}
          >
            Add Tag
          </Button>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={() => setModal(!modal)}>Close</Button>
    <Button variant="primary" onClick={addLink}>Save changes</Button>
  </Modal.Footer>
</Modal>
          </> 
        )
}  