class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = Number(time);
  }
  watch(){
    return `${this.uploader} watched all ${this.time} seconds of ${this.title}`;
  }
};

const myVideo = new Video ("I love cats", "Shoshana", 12);

console.log(myVideo.watch());

const yourVideo = new Video ("Funny vids", "Miriam", 45);

console.log(yourVideo.watch());

const manyVideos = [
    { title : "whatever", uploader: "sportacus", time: 765},
    { title : "heya", uploader: "ive", time: 892489288}, 
    { title : "pop", uploader: "illit", time: 7324}, 
    { title : "OMG", uploader: "newjeans", time: 45455}, 
    { title : "scientist", uploader: "twice", time: 77676} 
];

for (const videoData of manyVideos) {
    const {title, uploader, time} = videoData;
    const video = new Video(title, uploader, time);
    console.log(video.watch());
};




