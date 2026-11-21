for (const videoData of manyVideos) {
    const {title, uploader, time} = videoData;
    const video = new Video(title, uploader, time);
    console.log(video.watch());
}