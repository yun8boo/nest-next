import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreatePostInput = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export type CreateRecipeInput = {
  description?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type DeletePostInput = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createRecipe: Recipe;
  deletePost: Post;
  updatePost: Post;
  updateRecipe: Recipe;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateRecipeArgs = {
  createRecipeInput: CreateRecipeInput;
};


export type MutationDeletePostArgs = {
  deletePostInput: DeletePostInput;
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationUpdateRecipeArgs = {
  updateRecipeInput: UpdateRecipeInput;
};

/** post */
export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type PostsOrderByInput = {
  updatedAt?: InputMaybe<PostsSortType>;
};

/** Properties by which post connections can be ordered. */
export enum PostsSortType {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  post: Post;
  posts: Array<Post>;
  recipe: Recipe;
  recipes: Array<Recipe>;
  test: Scalars['String'];
  user: User;
};


export type QueryPostArgs = {
  id: Scalars['String'];
};


export type QueryPostsArgs = {
  orderBy?: InputMaybe<PostsOrderByInput>;
  searchValue?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
};


export type QueryRecipeArgs = {
  id: Scalars['String'];
};


export type QueryRecipesArgs = {
  orderBy?: InputMaybe<RecipesOrderByInput>;
  searchValue?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

/** recipe */
export type Recipe = {
  __typename?: 'Recipe';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RecipesOrderByInput = {
  updatedAt?: InputMaybe<RecipesSortType>;
};

/** Properties by which recipe connections can be ordered. */
export enum RecipesSortType {
  Asc = 'asc',
  Desc = 'desc'
}

export type UpdatePostInput = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateRecipeInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

/** user */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  updatedAt: Scalars['DateTime'];
};

export type RecipeItemFragment = { __typename?: 'Recipe', id: string, title: string, description?: string | null | undefined, createdAt: any, updatedAt: any };

export type RecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipesQuery = { __typename?: 'Query', recipes: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null | undefined, createdAt: any, updatedAt: any }> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, email: string, posts?: Array<{ __typename?: 'Post', id: string, title: string }> | null | undefined } };

export const RecipeItemFragmentDoc = gql`
    fragment RecipeItem on Recipe {
  id
  title
  description
  createdAt
  updatedAt
}
    `;
export const RecipesDocument = gql`
    query recipes {
  recipes {
    ...RecipeItem
  }
}
    ${RecipeItemFragmentDoc}`;

/**
 * __useRecipesQuery__
 *
 * To run a query within a React component, call `useRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecipesQuery(baseOptions?: Apollo.QueryHookOptions<RecipesQuery, RecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipesQuery, RecipesQueryVariables>(RecipesDocument, options);
      }
export function useRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipesQuery, RecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipesQuery, RecipesQueryVariables>(RecipesDocument, options);
        }
export type RecipesQueryHookResult = ReturnType<typeof useRecipesQuery>;
export type RecipesLazyQueryHookResult = ReturnType<typeof useRecipesLazyQuery>;
export type RecipesQueryResult = Apollo.QueryResult<RecipesQuery, RecipesQueryVariables>;
export const UserDocument = gql`
    query user {
  user(id: "ckysd3b2t0004vzuwnetxasrt") {
    id
    email
    posts {
      id
      title
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;