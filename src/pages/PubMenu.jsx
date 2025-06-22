import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import CuisineCard from "../components/Card";

const PubMenu = () => {
  const [cuisines, setCuisines] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [formInput, setFormInput] = useState({
    search: "",
    filter: "",
    sort: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get(
        `https://hizkiajonathanbudiana.my.id/pub/cuisines?search=${formInput.search}&filter=${formInput.filter}&page=${currentPage}&sort=${formInput.sort}`
      );

      const { data: dataCategories } = await axios.get(
        "https://hizkiajonathanbudiana.my.id/pub/categories"
      );

      console.log("berhasil");

      setCuisines(data.data);
      setCategories(dataCategories.categories);
      setTotalPage(data.totalPage);

      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchData();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <header className="mb-4">
          <h1 className="fw-light">Our Signature Cuisines</h1>
          <p className="text-muted">Find your next favorite dish.</p>

          <form onSubmit={handleSubmit}>
            <div className="row g-2 mt-3">
              <div className="col-md-5">
                <input
                  className="form-control"
                  placeholder="Search..."
                  name="search"
                  value={formInput.search}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-3">
                <select
                  className="form-select"
                  name="filter"
                  value={formInput.filter}
                  onChange={handleChange}
                >
                  <option value="">Filter by all Category</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <select
                  className="form-select"
                  name="sort"
                  value={formInput.sort}
                  onChange={handleChange}
                >
                  <option value="">Sort by all</option>
                  <option value="DESC">Newest Post</option>
                  <option value="ASC">Oldest Post</option>
                </select>
              </div>

              <div className="col-md-1">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isLoading}
                >
                  {isLoading ? "Finding" : "Find"}
                </button>
              </div>
            </div>
          </form>
        </header>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
          {cuisines.map((el) => (
            <CuisineCard key={el.id} cuisine={el} />
          ))}
        </div>

        <nav className="mt-4 d-flex justify-content-center">
          <ul className="pagination">
            {Array.from({ length: totalPage }, (_, i) => (
              <li key={i} className="page-item">
                <button
                  className={
                    currentPage === i + 1
                      ? "page-link btn btn-dark"
                      : "page-link btn btn-secondary"
                  }
                  onClick={async () => {
                    setCurrentPage(i + 1);
                  }}
                  disabled={currentPage === i + 1}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
};

export default PubMenu;
