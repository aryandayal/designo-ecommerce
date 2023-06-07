import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import headerImage from "../../Assets/header-image.jpg";
import { ProductContext } from "../../Contexts/ProductContext";
import {Footer} from "../../Component/Footer/Footer";
import "./HomeStyle.css";

const Home = () => {
  const { productState, filtersDispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header>
        <div className="header-img">
          <img src={headerImage} alt="vectorImage" />
        </div>
        <div className="header-body">
          <h2>Explore Desings</h2>
          <NavLink to="/products">
            <button
              onClick={() => filtersDispatch({ type: "setClear", payload: "" })}
            >
              Shop Now
            </button>
          </NavLink>
        </div>
      </header>
      <section className="category-section">
        <div className="category-head">
          <h1>Category</h1>
          <p>Discover more. Good things are waiting for you</p>
        </div>
        <div className="category-container">
          {productState.categories.map(
            ({ _id, image, categoryName, description }) => (
              <div
                key={_id}
                className="category-card"
                onClick={() => {
                  filtersDispatch({ type: "setClear", payload: "" });
                  filtersDispatch({
                    type: "setCategoryFilter",
                    payload: categoryName,
                  });
                  navigate("/products");
                }}
              >
                <div className="category-image">
                  <img src={image} alt={categoryName} />
                </div>
                <div className="category-body">
                  <h1>{categoryName}</h1>
                  <p>{description}</p>
                  <button>
                    see Collection <BsArrowRight />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};
export { Home };
