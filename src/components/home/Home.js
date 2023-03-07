import Hero from "../hero/Hero";

const Home = ({movies}) => {
    return (
        <main> 
            <Hero movies={movies} />
        </main>
    )
}

export default Home