import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../components/NavBar";
import { Link } from "react-router";

const PubMenu = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://hizkiajonathanbudiana.my.id/pub/cuisines/${id}`
      );

      console.log("berhasil");

      setDetails(data.postDetails);
      //   console.log(data);
    })();
  }, [id]);

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="ratio ratio-4x3">
              <img
                src={details.imgUrl}
                className="img-fluid rounded shadow-sm"
                alt={details.name + ".img"}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="col-md-6">
            <h1 className="fw-bold mt-4">{details.name}</h1>
            <p className="badge bg-primary">{details.Category?.name}</p>
            <p className="mt-3">{details.description}</p>

            <h3 className="mt-4 fw-light">Price</h3>
            <p className="display-6 text-primary fw-bold">{details.price}</p>

            <div className="mt-4">
              <h5 className="fw-light">Created by:</h5>
              <p className="text-muted">{details.User?.username}</p>
            </div>

            <Link to={"/"} className="btn btn-outline-secondary mt-4">
              Back to Menu
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default PubMenu;
