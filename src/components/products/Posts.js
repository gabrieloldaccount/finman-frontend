import { Table } from "react-bootstrap";
import { useState } from "react";

import FacebookLogin from "react-facebook-login";
import FacebookService from "../../services/FacebookService";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const responseFacebook = async (response) => {
    setPosts(await FacebookService.getFeed());
  };

  const isPostEmpty = () => {
    return !Array.isArray(posts) || posts.length === 0;
  };

  return (
    <>
      {/* // TODO: hide the button when logged in */}
      <FacebookLogin
        appId="470469467364255"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        version="10.0"
      />
      {isPostEmpty() ? (
        <div style={{ marginTop: 20, marginBottom: 20 }}>No Posts to Show</div>
      ) : (
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>Time Posted</th>
              <th>Message</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.name}>
                <td>{post.time}</td>
                <td>{post.message}</td>
                <td>{post.likes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Posts;
