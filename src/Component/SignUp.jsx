import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  function handleInput(event) {
    setUser((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    })
  }

  function handleSubmit() {
    console.log(user);
    navigate("service/s1/s2/s3/*")
    // navigate("/about")
    
  }



  return (
    <section className="main-box">
      <div className="signUp-box">
        <form className="form" onSubmit={handleSubmit}>
        <input className="inp" required type="email" onChange={handleInput}
          placeholder="Enter Email" name="email" value={user.email} />

        <input className="inp" maxLength={8} type="password" onChange={handleInput}
          placeholder="Enter Password" name="password" value={user.password} />

        <button className="btn">Sign In</button>

        </form>


      </div>
    </section>
  )
}

export default SignUp
