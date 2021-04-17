const Container = ({ children, className = "container", style }) => {
  return (
    <div className={className} style={style}>
      {" "}
      {children}{" "}
    </div>
  );
};

export default Container;
