import HeroVideoDialog from "./magicui/hero-video-dialog";

export function HeroVideoSection() {
  return (
    <div className="relative px-6 mt-10 my-5">
      <div className="relative size-full shadow-xl rounded-2xl overflow-hidden w-full max-w-screen-2xl mx-auto">
        <HeroVideoDialog
          className="block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/orjoQBeCMI4"
          thumbnailSrc="thumbnail.jpg"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
}
