
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';
s
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } =  useFetch('http://cosmographialumeria.com:3000//blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://cosmographialumeria.com:3000//blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
     );
}
 
export default BlogDetails;