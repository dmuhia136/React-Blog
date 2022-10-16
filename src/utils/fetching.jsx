import axios from "axios";

export default async function fetchPosts() {
  try {
    var data = await axios.get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=326d8bbce98e4379bd530806b8c9b601"
    );
    return data.articles;
  } catch (error) {
    throw Err(err);
  }
}
