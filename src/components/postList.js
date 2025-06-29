function PostList(props) {
  return props.posts.map((post) => {
    return (
      <div className="col-md-4" key={post.id}>
        <img src={post.img} width="70%" alt="Post Thumbnail" />
        <h5>{post.title}</h5>
        <p>{post.content}</p>
      </div>
    );
  });
}

export default PostList;
