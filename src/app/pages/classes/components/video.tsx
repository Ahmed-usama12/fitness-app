import { useSelectedExercise } from "../context/selected-exercise.context";

export default function Video() {
  //State

  //UseContext
  const { selectedExercise } = useSelectedExercise();

  function getYoutubeEmbedUrl(url?: string | null) {
    if (!url) return "";

    if (url.includes("youtu.be")) {
      const videoId = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes("watch?v=")) {
      const videoId = url.split("watch?v=")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  }

  return (
    <>
      {selectedExercise && (
        <div className="py-6">
          <iframe
            className="w-full rounded-[20px]"
            height="450"
            src={getYoutubeEmbedUrl(selectedExercise.short_youtube_demonstration_link)}
            title={selectedExercise.exercise}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      )}
    </>
  );
}
