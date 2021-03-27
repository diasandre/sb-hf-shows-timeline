import { useRouter } from "next/router";
import data from "../../shows.json";

const Player = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item = null] = data.filter((item) => (item.year == id));

  if (item == null) {
    return <div>sem nd</div>;
  }

  const { link } = item;

  return (
    <div>
      {link}
    </div>
  );
};

export default Player;
