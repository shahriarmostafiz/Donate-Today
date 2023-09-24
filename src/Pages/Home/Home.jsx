import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto" >

                <Categories categories={categories}></Categories>
            </div>
        </div>
    );
};

export default Home;