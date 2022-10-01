import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img 
        className="postImg"
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2886&q=80" 
        alt="" 
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor, sit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere quisquam, modi asperiores quo a nesciunt fugiat qui rerum laudantium eius odit voluptas doloremque autem inventore minima architecto quae enim!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere quisquam, modi asperiores quo a nesciunt fugiat qui rerum laudantium eius odit voluptas doloremque autem inventore minima architecto quae enim!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere quisquam, modi asperiores quo a nesciunt fugiat qui rerum laudantium eius odit voluptas doloremque autem inventore minima architecto quae enim!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere quisquam, modi asperiores quo a nesciunt fugiat qui rerum laudantium eius odit voluptas doloremque autem inventore minima architecto quae enim!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere quisquam, modi asperiores quo a nesciunt fugiat qui rerum laudantium eius odit voluptas doloremque autem inventore minima architecto quae enim!
      </p>
    </div>
  )
}
