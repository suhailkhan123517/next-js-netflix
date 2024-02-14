import React from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/components/navbar";
import Billboard from "@/components/billboard";
import useMoviesList from "@/hooks/use-movie-list";
import MovieList from "@/components/movie-list";
import useFavorites from "@/hooks/use-favorites";
import InfoModal from "@/components/info-modal";
import useInfoModalStore from "@/hooks/use-info-modal-store";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Home = () => {
  const { data: movies = [] } = useMoviesList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
};

export default Home;
