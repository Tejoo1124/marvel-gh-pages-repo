import axios from "axios";

const KEY = "AIzaSyBAE-7aIKo3eLPgJPk3YpC_zEVMzzz18fA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
