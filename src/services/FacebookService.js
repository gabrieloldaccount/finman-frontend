class FacebookService {
  initFacebookSdk() {
    return new Promise((resolve) => {
      // wait for facebook sdk to initialize before starting the react app
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: 470469467364255,
          cookie: true,
          xfbml: true,
          status: true,
          version: "v10.0",
        });
      };

      // load facebook sdk script
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    });
  }

  isLoggedIn() {
    window.FB.getLoginStatus(function (response) {
      console.log("STATUS:" + JSON.stringify(response));
    });
    return false;
  }

  getFeed() {
    // nested function to convert the posts to our own objects
    const convertPost = (posts) => {
      return new Promise(async (resolve) => {
        let json = [];

        for (const post of posts) {
          const reactions = await getReactions(post);
          json.push(reactions);
        }
        resolve(json);
      });
    };

    // given an id of a post, retrieve the reaction total count
    const getReactions = (post) => {
      return new Promise((resolve) => {
        let postWithReactions;

        window.FB.api(
          `/${post.id}/reactions?summary=total_count`,
          "GET",
          (result) => {
            if (result && !result.error) {
              postWithReactions = {
                id: post.id,
                time: post.created_time,
                message: post.message,
                price: 1,
                likes: result.summary.total_count,
              };
              resolve(postWithReactions);
            }
          }
        );
      });
    };

    return new Promise((resolve) => {
      let feed;
      window.FB.api("/me/feed", function (result) {
        if (result && !result.error) {
          feed = convertPost(result.data);
          resolve(feed);
        }
      });
    });
  }
}

export default new FacebookService();
