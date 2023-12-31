const SignOut = ({ handleSignOut }) => {
  const handleOnClick = () => {
    handleSignOut();
  };

  return (
    <div>
      <button className="signout-btn" onClick={handleOnClick}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
