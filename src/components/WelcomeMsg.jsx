const WelcomeMsg = ({onGetPostsClick}) => {
  return (
    <center className="welcome-msg">
      <h1>There are No Posts</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Fetch Posts from Server
      </button>
    </center>
  );
};

export default WelcomeMsg;
