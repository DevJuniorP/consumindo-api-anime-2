import { Container, MovieList } from "../Components/styles";

const Home = () => {
    return(
        <Container>
            <h1>Animes:</h1>
            <MovieList>
                <li>
                    <img src="https://cdn11.bigcommerce.com/s-9xdcxxuu0e/images/stencil/960w/products/13064/16011/befc4c5d668d35aca6fc988aaeab550a2e66260d__76611.1617880747.jpg?c=1"/>
                    <span>Demon Slayer</span>
                </li>
            </MovieList>
        </Container>
    )
}

export default Home;