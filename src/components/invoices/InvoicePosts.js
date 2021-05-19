import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import FacebookLogin from "react-facebook-login";
import FacebookService from "../../services/FacebookService";

import { Row, Col, Button } from "react-bootstrap";

const InvoicePosts = ({ owner, onAddItem }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const responseFacebook = async (response) => {
    setPosts(await FacebookService.getFeed());
    setIsLoggedIn(true);
  };

  const facebookLoginButton = () => {
    return (
      <FacebookLogin
        appId="470469467364255"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        version="10.0"
        textButton="Fetch Pictures"
      />
    );
  };

  const postDropdown = () => {
    return (
      <Row md={7} style={{ marginTop: 20, marginBottom: 20 }}>
        <Col md="auto">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {!selectedPost.name ? "Select post" : selectedPost.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {posts.map((_post, index) => (
                <Dropdown.Item
                  key={_post.name}
                  onClick={() => setSelectedPost(_post)}
                >
                  {_post.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md="auto">
          <Button
            variant="primary"
            onClick={(e) => addItem(e)}
            disabled={selectedPost.name ? false : true}
          >
            Add item
          </Button>
        </Col>
      </Row>
    );
  };

  const addItem = (e) => {
    e.preventDefault();

    //Passes values to AddInvoice where state is handled.
    if (selectedPost.name) {
      onAddItem({
        owner: owner,
        amount: 1,
        name: selectedPost.name,
        price: selectedPost.price,
      });
    }

    setSelectedPost({});
  };

  return <>{isLoggedIn ? postDropdown() : facebookLoginButton()}</>;
};

export default InvoicePosts;
