import Seo from "./components/Seo";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const auth = getAuth();
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message.replace("Firebase: ", ""));
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div className="pt-[50px]">
      <Seo title="로그인" />
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleChange}
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
    </div>
  );
}
