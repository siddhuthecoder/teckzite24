const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        // poster="../../favicon.png"
      >
        <source src="../../preloader.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Preloader;
