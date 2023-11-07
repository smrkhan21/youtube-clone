export const Google_api_key = "AIzaSyC9FLZ4IpKVoVf43cErRIK9WSHxW8Bay4M";

export const video_recommendations_api = `https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=50&regionCode=in&key=${Google_api_key}&channelId=`;

export const videoDetailsApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  Google_api_key;

export const youtube_video_api =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  Google_api_key;

export const youtube_search_api =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const Search_results_api =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const channelImage_api =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  Google_api_key;

export const video_comments_details_api =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=100&order=relevance&key=" +
  Google_api_key +
  "&videoId=";
var nameList = [
  "Rahul",
  "Kohli",
  "Gill",
  "Rohit",
  "SKY",
  "Bumrah",
  "Jadeja",
  "Shami",
  "Kuldeep",
  "Shreyas",
  "Sarfraz",
  "Thakur",
  "Ashwin",
  "Ishan",
  "Pandya"
];
export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

// Generating Random Text for Live Chat
export function getRandomText(length) {
  const thoughts = [
    "Life is a journey, not a destination.",
    "Don't worry, be happy!",
    "The only way to do great work is to love what you do.",
    "Every moment is a fresh beginning.",
    "In the middle of every difficulty lies opportunity.",
    "Just keep swimming!",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow will be our doubts of today."
  ];

  const randomIndex = Math.floor(Math.random() * thoughts.length);
  return thoughts[randomIndex];
}
