import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    // maxResults: 5,
    // key: import.meta.env.VITE_REACT_APP_YT_API_KEY,
    key: "AIzaSyDWtWw-OTN83mdsKwdp5g_GIC_Yo8IN8nk",
  },
});
