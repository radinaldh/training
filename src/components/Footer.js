function Footer(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h1>{props.text1}</h1>
      </div>
      <div className="col-6">
        <h1>{props.text2}</h1>
      </div>
    </div>
  );
}

export default Footer;
