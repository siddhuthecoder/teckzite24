const BackgroundGIF = () => {
  return (
    <main
      className="absolute w-full h-[100vh] z-0 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('../../mainbg.gif')", position: "fixed" }}
    ></main>
  );
};

export default BackgroundGIF;
