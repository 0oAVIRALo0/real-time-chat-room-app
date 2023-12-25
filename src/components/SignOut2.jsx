const SignOut2 = ({ handleSignOut }) => {
  const handleOnClick = () => {
    handleSignOut();
  };

  return (
    <div>
      <button className="signout2-btn" onClick={handleOnClick}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut2;
