import { Types } from '../store/types';
import { Dispatch } from 'react';
import { Action } from '../store/reducer';

export const getUser = async ( dispatch: Dispatch<Action>, username: string | undefined) => {
  const url = "https://api.github.com/users/";

  dispatch({
      type: Types.GetUserStart
    });

  try {
    const response = await fetch(`${url}${username}`);
    const result = await response.json();

    if (response.status !== 200) throw new Error(result?.message ? result.message : "Not Found");

    dispatch({
      type: Types.GetUserSuccess,
      user: {
        name: result.name,
        login: result.login,
        html_url: result.html_url,
        created_at: result.created_at,
        bio: result.bio,
        avatar_url: result.avatar_url,
        public_repos: result.public_repos,
        followers: result.followers,
        following: result.following,
        location: result.location,
        blog: result.blog,
        twitter_username: result.twitter_username,
        company: result.company,
      }
    });
  } catch (error) {
    dispatch({ type: Types.GetUserError, error });
  }
};