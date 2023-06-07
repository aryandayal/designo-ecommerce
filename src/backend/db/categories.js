import { v4 as uuid } from "uuid";
import Illustration from "../../Assets/Category/illustration.png";
import Painting from "../../Assets/Category/painting.jpg";
import WallPainting from "../../Assets/Category/3d.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Illustration",
    description:
      "computer graphic designs",
    image: Illustration,
  },
  {
    _id: uuid(),
    categoryName: "Painting",
    description:
      "this is hand made painting with paints",
    image: Painting,
  },
  {
    _id: uuid(),
    categoryName: "3d Wallpapers",
    description:
      "amazing and exclusive 3d wallpapers. specially for wall",
    image: WallPainting,
  },
];