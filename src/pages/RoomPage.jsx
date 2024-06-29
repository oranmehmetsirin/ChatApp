const RoomPage = ({ setIsAuth, setRoom }) => {
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("TOKEN");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const room = e.target[0].value;
    setRoom(room);
  };
  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h2>ChatRoom</h2>
      <p>Which Room Will You Enter?</p>
      <input placeholder="Example:ChatRoom1" type="text" required />
      <button type="submit">Enter The Room</button>
      <button onClick={logout} type="button">
        Log Out
      </button>
    </form>
  );
};

export default RoomPage;
