import { Table } from "react-bootstrap";
import { useState } from "react";

import FacebookLogin from "react-facebook-login";
import FacebookService from "../../services/FacebookService";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const responseFacebook = async (response) => {
    setPosts(await FacebookService.getFeed());
    console.log("BACKATITAGAIN: " + JSON.stringify(posts));
  };

  return (
    <>
      <FacebookLogin
        appId="470469467364255"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        version="10.0"
      />
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.name}>
              <td>{post.name}</td>
              <td>{post.likes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Posts;
