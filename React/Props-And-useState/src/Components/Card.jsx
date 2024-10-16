
// eslint-disable-next-line react/prop-types
let Card=({s1,username,DOB})=>{
  // console.log(hello);
  // console.log(typeof hello);
  return (
    <div style={s1}>
      <b>Name:</b>{username}
      <br/>
      <b>Date Of Birth:</b>{DOB}
    </div>
  );
}
export default Card;