class FacebookService {
  initFacebookSdk() {
    return new Promise((resolve) => {
      // wait for facebook sdk to initialize before starting the react app
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: 470469467364255,
          cookie: true,
          xfbml: true,
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

  // getPosts(postIds) {
  //   let json = [];
  //   postIds.forEach((post) => {
  //     window.FB.api(
  //       `/${post.id}/reactions?summary=total_count`,
  //       "GET",
  //       function (reactions) {
  //         if (reactions && !reactions.error) {
  //           console.log("REACTIONS: " + JSON.stringify(reactions));
  //           const tempJson = {
  //             likes: reactions.summary.total_count,
  //             id: post.id,
  //           };
  //           console.log("TEMPJSON: " + JSON.stringify(tempJson));
  //           json.push(tempJson);
  //         }
  //       }
  //     );
  //   });
  //   json.forEach((prod) => console.log("PRODS: " + JSON.stringify(prod)));
  //   return json;
  // }

  getFeed() {
    const convertPost = async (posts) => {
      let json = [];

      // for (const post of posts) {
      //   console.log("CURRENT_POST: " + JSON.stringify(post));
      //   await window.FB.api(
      //     `/${post.id}/reactions?summary=total_count`,
      //     "GET",
      //    function (reactions) {
      //       if (reactions && !reactions.error) {
      //         console.log("CURRENT_REACTION: " + JSON.stringify(reactions));
      //         const tempJson = {
      //           likes: reactions.summary.total_count,
      //           id: post.id,
      //         };
      //         json.push(tempJson);
      //       }
      //     }
      //   );
      // }

      // REAL SCUFFED SOLUTION SINCE JAVASCRIPT SUCKS PENIS
      // OTHERWISE IT WILL RETURN EMPTY ARRAY
      //await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      //console.log("AFTER STATE: " + JSON.stringify(json));
      //return json;
    };

    window.FB.api("/me/feed", function (feed) {
      if (feed && !feed.error) {
        return convertPost(feed.data);
      }
    });
  }
}

export default new FacebookService();
