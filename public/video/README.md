# Cinematic video asset

Place the supplied 5–10 second background clip here as:

`public/video/portfolio-background.mp4`

The `CinematicVideo` engine intentionally does not autoplay or loop the video. It seeks through the clip from document scroll progress and uses a LERP loop to move toward the target frame.

For deployment, keep the MP4 H.264 encoded, muted/no-audio, and optimized for web delivery. The current source clip is 1280×720 and approximately 10 seconds; a web-optimized copy is recommended for fast first paint.