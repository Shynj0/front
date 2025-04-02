interface BallProps {
    letter: string;
  }
  
  const Ball: React.FC<BallProps> = ({ letter }) => {
    const ballStyle = {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "lightblue",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "5px",
      fontSize: "20px",
      color: "darkblue",
    };
  
    return <div style={ballStyle}>{letter}</div>;
  };
  
  export default Ball;
  