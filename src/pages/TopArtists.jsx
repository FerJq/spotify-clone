import { Error, Loader, ArtistCard } from '../components';
import { useGetTopArtistsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const [activeSong, isPlaying] = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopArtistsQuery();

  if (isFetching) return <Loader title="Loading TOP ARTISTS" />;
  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Artists
        <span className="font-black">{country}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track, i) => (
          <ArtistCard key={track.key} track={track} i={i} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
