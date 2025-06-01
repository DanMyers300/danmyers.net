const starCount = 50;

function Stars() {
  const stars = Array.from({ length: starCount }).map((_, index) => {
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    return (
      <div
        key={index}
        className="absolute h-[0.2rem] w-[0.2rem] bg-white rounded-full"
        style={{
          top: `${y}%`,
          left: `${x}%`,
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    );
  });

  return (
    <>
      {stars}
    </>
  );
}

export default Stars;
