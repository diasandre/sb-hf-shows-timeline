import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { LoadingWrapper } from "../../styles/styles";
import PuffLoader from "react-spinners/PuffLoader";
import Header from "../../components/Header";

import data from "../../shows.json";
import YouTube from "react-youtube";

const Player = () => {
  const router = useRouter();
  const { id } = router.query;

  const [content, setContent] = useState(null);

  useEffect(() => {
    const [value = null] = data.filter((item) => item.year == id);

    if (value != null) {
      setContent(value);
    } else {
      router.push("/");
    }
  }, []);

  if (content != null) {
    const { link: videoId } = content;

    const opts = {
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 1,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
      },
    };

    return (
      <>
        <Header />
        <YouTube
          videoId={videoId}
          opts={opts}
          className="player-youtube"
        />
      </>
    );
  } else {
    return (
      <LoadingWrapper>
        <PuffLoader color="#ffffff" loading={true} size={150} />
      </LoadingWrapper>
    );
  }
};

export default Player;
