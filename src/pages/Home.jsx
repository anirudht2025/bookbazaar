import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import Preloader from "../components/Preloader";
import Header from "../User/components/Header";
import Footer from "../User/components/Footer";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { searchContext } from "../contextAPI/SharedContext";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { latestBooksAPI } from "../services/allApis";

function Home() {
  const [loadStatus, setLoadStatus] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadStatus(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const [latest, setLatest] = useState([]);

  useEffect(() => {
    handleLatestBooks();
  }, []);

  const handleLatestBooks = async () => {
    const response = await latestBooksAPI();
    console.log(response);

    if (response.status === 200) {
      setLatest(response.data);
    }
  };

  const { search, setSearch } = useContext(searchContext);
  const navigate = useNavigate();

  const handleSearchNavigate = () => {
    if (sessionStorage.getItem("token")) {
      if (search.trim()) {
        navigate("/books");
      } else {
        toast.warning("Enter valid search key!!");
      }
    } else {
      toast.info("Please Login First!!");
      navigate("/auth");
    }
  };
  return (
    <>
      {loadStatus ? (
        <Preloader />
      ) : (
        <>
          <ToastContainer />
          <Header />

          {/* HERO */}
          <section className="w-full">
            <div className="h-[70vh] bg-[url('https://i.etsystatic.com/23719212/r/il/fb0389/2660290993/il_fullxfull.2660290993_tiza.jpg')] bg-cover bg-center bg-fixed bg-no-repeat">
              <div className="flex h-full flex-col items-center justify-center bg-black/30 px-4 text-center text-white">
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                  Discover Your Next Great Read
                </h1>

                <p className="mt-4 text-lg font-medium text-gray-200 md:text-xl">
                  Give your family and friends a book they'll love.
                </p>

                <div className="relative mt-6 w-full max-w-xl">
                  <input
                    type="text"
                    placeholder="Search books"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg bg-white px-4 py-3 pr-12 text-gray-600 outline-none"
                  />

                  <FaSearch
                    onClick={handleSearchNavigate}
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-black transition-colors duration-200 hover:text-green-600"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* NEW ARRIVALS */}
          <section className="w-full px-6 py-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900">
                New Arrivals
              </h2>

              <p className="mt-2 text-lg text-slate-500">
                Explore our newest arrivals
              </p>
            </div>

            {/* Books */}
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {latest.length > 0 ? (
                latest.map((item) => (
                  <div key={item._id}>
                    {/* CARD */}
                    <div className="w-64 overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-80 w-full object-cover"
                      />

                      <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-lg font-bold text-green-700">
                          ₹{item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-lg text-gray-500">No books available</p>
              )}
            </div>

            {/* Explore More */}
            <div className="mt-8 text-center">
              <button className="rounded-lg bg-blue-800 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-900">
                Explore More
              </button>
            </div>
          </section>

          {/* AUTHORS */}
          <section className="w-full px-6 py-12">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              {/* Content */}
              <div>
                <p className="text-sm font-semibold tracking-widest text-amber-500">
                  FEATURED AUTHORS
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                  CAPTIVATE WITH EVERY WORD
                </h2>

                <p className="mt-5 leading-7 text-gray-600 text-justify">
                  Behind every unforgettable story is an author with a unique
                  imagination, a powerful voice, and a story worth sharing. At
                  BookBazaar, we bring together talented writers from different
                  genres and backgrounds, giving readers the opportunity to
                  discover the minds behind the books they love.
                </p>

                <p className="mt-4 leading-7 text-gray-600 text-justify">
                  From bestselling authors to emerging voices, explore inspiring
                  collections filled with memorable characters, fascinating
                  ideas, and stories that stay with you long after the final
                  page. Discover an author who speaks to you and find your next
                  great read.
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src="https://media.istockphoto.com/id/1345371869/photo/senior-male-author-sitting-at-table-with-book-and-holds-hands-under-head.jpg?s=612x612&w=0&k=20&c=RiQw0gXvUm2c9UsAK77MjS7Wr49i5s-TEm-l6QMX43o="
                  alt="Featured author"
                  className="w-full max-w-md rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="w-full px-6 py-12">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-widest text-amber-500">
                TESTIMONIALS
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                SEE WHAT OTHERS ARE SAYING
              </h2>
            </div>

            <div className="mt-8 flex flex-col items-center text-center">
              <img
                src="https://www.bllifesciences.com/wp-content/uploads/2022/06/testimonialjpg.jpg"
                alt="John Doe"
                className="h-40 w-40 rounded-full object-cover"
              />

              <h3 className="mt-4 text-xl font-bold">JOHN DOE</h3>

              <p className="mt-3 max-w-2xl leading-7 text-gray-600 text-justify">
                BookBazaar has completely changed the way I discover books. The
                collection is impressive, the browsing experience is simple, and
                I always seem to find something interesting to read. It has
                quickly become one of my favorite places to explore new stories
                and authors.
              </p>
            </div>
          </section>

          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
