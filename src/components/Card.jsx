import { Link } from "react-router-dom";

const CuisineCard = ({ cuisine }) => {
  return (
    <div className="col">
      <div className="card h-100 border-0 shadow-sm">
        <div className="ratio ratio-1x1">
          <img
            src={cuisine.imgUrl}
            className="card-img-top"
            alt={cuisine.name + ".img"}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{cuisine.name}</h5>
          <p className="text-muted small">{cuisine.description}</p>
        </div>
        <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
          <p className="fw-bold mb-0">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(cuisine.price)}
          </p>
          <Link
            to={`/details/${cuisine.id}`}
            className="btn btn-sm btn-outline-primary"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CuisineCard;
