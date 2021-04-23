import { createContext, useState, ReactNode } from "react";

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  setPlayingState: (state: boolean) => void;
  tooglePlay: () => void;
}

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = {
  children: ReactNode;
}

export function PlayerContextProdiver({ children }: PlayerContextProviderProps){
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  function play(episode: Episode){
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }
  
  function tooglePlay(){
    setIsPlaying(!isPlaying);
  }
  
  function setPlayingState(state: boolean){
    setIsPlaying(state);
  }
  
  return (
   <PlayerContext.Provider 
      value={{ episodeList,
      currentEpisodeIndex, 
      play, 
      isPlaying, 
      tooglePlay, 
      setPlayingState
    }}>
      { children }
   </PlayerContext.Provider>
  )
}

