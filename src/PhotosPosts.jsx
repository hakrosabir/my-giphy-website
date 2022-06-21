import React, { Component, Fragment } from "react";

class PhotosPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          albumId: 1,
          id: 1,
          title: "Shutup Giphy",
          url: "https://media.giphy.com/media/H7T8UdGOvOQiDf9QXj/giphy.gif",
          thumbnailUrl: "https://gph.is/g/aXjnOlD"
        },
        {
          albumId: 1,
          id: 2,
          title: "I'm lying!",
          url: "https://media.giphy.com/media/8w3tUOSluv8ojoA7XJ/giphy.gif",
          thumbnailUrl: "https://gph.is/g/ZdneM0E"
        },
        {
          albumId: 1,
          id: 3,
          title: "officia porro iure quia iusto qui ipsa ut modi",
          url: "https://media.giphy.com/media/AHcEGB5nuIALBqKWjp/giphy.gif",
          thumbnailUrl: "https://via.placeholder.com/150/24f355"
        },
        {
          albumId: 1,
          id: 4,
          title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
          url: "https://media.giphy.com/media/xT4uQAEs2e4RRYq69G/giphy.gif",
          thumbnailUrl: "https://via.placeholder.com/150/d32776"
        },
        {
          albumId: 1,
          id: 5,
          title: "natus nisi omnis corporis facere molestiae rerum in",
          url: "https://media.giphy.com/media/kBGYlyOCdG9ks5KCQo/giphy.gif",
          thumbnailUrl: "https://via.placeholder.com/150/f66b97"
        },
        {
          albumId: 1,
          id: 6,
          title: "accusamus ea aliquid et amet sequi nemo",
          url: "https://media.giphy.com/media/kBGYlyOCdG9ks5KCQo/giphy.gif",
          thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
        },
        {
          albumId: 1,
          id: 7,
          title:
            "officia delectus consequatur vero aut veniam explicabo molestias",
          url: "https://media.giphy.com/media/kBGYlyOCdG9ks5KCQo/giphy.gif",
          thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
        }
      ]
    };
  }

  render() {
    return (
      <>
        <h1> Welcome ,to my Giphy website! </h1>
        <hr />
        {this.state.posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title ? post.title : "N/A"} </h2>
              <img src={post.url} alt="images" length="600px" height="600px" />
            </div>
          );
        })}
        <hr />
      </>
    );
  }
}

export default PhotosPosts;
