import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDE4NWNhZWNmOTE4MTJkODc4NDcxNTFlZjYyMjZiYiIsInN1YiI6IjYyZmRlYjY0NzUxMTBkMDA4NDJmMTAyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9yOctkSxpvyNEW7cKuJzV3t5rdqUTfaHpk_QOVrwsHk`,
  },
});

export const getPopular = async (category) => {
  try {
    let { data } = await instance.get(`/${category}/popular`, {
      params: {
        language: "ko-KR",
        region: "KR",
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getNowPlaying = async () => {
  try {
    let { data } = await instance.get("/movie/now_playing", {
      params: {
        language: "ko-KR",
        region: "KR",
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getUpcoming = async () => {
  try {
    let { data } = await instance.get("/movie/upcoming", {
      params: {
        language: "ko-KR",
        region: "KR",
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getTopRated = async (category) => {
  try {
    let { data } = await instance.get(`/${category}/top_rated`, {
      params: {
        language: "ko-KR",
        region: "KR",
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAiringToday = async () => {
  try {
    let { data } = await instance.get("/tv/airing_today", {
      params: {
        language: "ko-KR",
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getOnTheAir = async () => {
  try {
    let { data } = await instance.get("/tv/on_the_air", {
      params: {
        language: "ko-KR",
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getVideos = async (results) => {
  try {
    let ids = results.map((obj) => obj.id);
    let video = await Promise.all(
      ids.map((id) => instance.get(`movie/${id}/videos`))
    );
    return video;
  } catch (e) {
    console.log(e);
  }
};

export const getDetails = async (url) => {
  try {
    let results = await instance.get(url, {
      params: {
        language: "ko-KR",
      },
    });
    return results;
  } catch (e) {
    console.log(e);
  }
};
