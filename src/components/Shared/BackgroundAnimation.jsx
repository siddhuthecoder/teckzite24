const BackgroundAnimation = () => {
  return (
    <>
      <div
        className="a_box pointer-events-none"
        style={{ zIndex: 2, pointerEvents: "none" }}
      >
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default BackgroundAnimation;
