import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://cosmographialumeria.com:3000//blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
     );s
}

export default Home;