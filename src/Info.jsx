import ProfileImage from "../src/assets/images/profile.jpg";

export default function Info() {
  return (
    <>
      <div className="header">
        <img className="profile-image" src={ProfileImage} />
        <h3>Catalin Pirvulescu</h3>
        <h4>Web Developer</h4>
        <h5>igunereve@gmail.com</h5>

        <div className="social-btn">
          <button className="email">
            <i className="fa-regular fa-envelope"></i>Email
          </button>

          <button className="linkedin">
            <i className="fa-brands fa-linkedin"></i>Linkedin
          </button>
        </div>
      </div>
    </>
  );
}
