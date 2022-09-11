import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <ul>
            {movies.map(({ title, id}) => <MovieItem id={id} title={title} />)}
        </ul>
    </section>
)
