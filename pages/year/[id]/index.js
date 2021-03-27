import { useRouter } from "next/router";
import data from "../../../shows.json";

const Player = () => {
  const router = useRouter();
  const { id } = router.query;

  const values = data.filter((item) => (item.year = id));

  if (values == null) {
    return <div>sem nd</div>;
  }

  const { link } = values;

  return (
    <div>
      {link}
    </div>
  );
};

export default Player;
