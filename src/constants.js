export const List = ['Games', 'Tmkoc', 'Sports', 'IPL','RCB','Cricket' ,'Football', 'Hockey', 'Movies']
const YOUTUBE_API_KEY = 'AIzaSyCmWD_KH2nYzU3z9Y5tefadZrkchKJBDPU'
export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key=' + YOUTUBE_API_KEY;