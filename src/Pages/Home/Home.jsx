import { useLoaderData } from "react-router-dom";
import Categories from "../../Components/Categories/Categories";
import { useRef, useState } from "react";

const Home = () => {
    const categories = useLoaderData()
    const [search, setSearch] = useState('')
    const inputRef = useRef(null)
    const handleSearch = () => {
        const data = inputRef.current.value
        setSearch(data)
    }
    console.log(search);
    return (
        <div>
            {/* <Banner></Banner> */}
            <div>
                <div>
                    <div className="hero h-[90vh]" style={{ backgroundImage: 'url(https://i.ibb.co/JBNT1st/banner.jpg)', }}>
                        <div className="hero-overlay bg-white bg-opacity-60"></div>
                        <div className="hero-content text-center">
                            <div className="max-w-md text-black">
                                <div className="relative">
                                    <input ref={inputRef} type="text" placeholder="Search here..." className="input input-bordered w-96 pr-16" />
                                    <button
                                        onClick={handleSearch}
                                        className="btn bg-red-500 text-white border-none absolute top-0 right-0 rounded-l-none">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-w-7xl mx-auto" >

                <Categories searchData={search} categories={categories}></Categories>
            </div>
        </div>
    );
};

export default Home;