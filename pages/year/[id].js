import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PlayerContainer, LoadingWrapper } from "../../styles/styles";
import PuffLoader from "react-spinners/PuffLoader";
import Header from "../../components/Header";

import data from "../../shows.json";

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
    const { link } = content;
    const src = `http://www.youtube.com/embed/${link}?autoplay=1&rel=0&showinfo=0&iv_load_policy=3&fs=1`;

    return (
      <>
        <Header />
        <PlayerContainer>
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="100%"
            src={src}
            frameBorder="0"
          />
        </PlayerContainer>
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
