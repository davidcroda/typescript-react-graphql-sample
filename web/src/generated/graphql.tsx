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
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  skill?: Maybe<Skill>;
  skills: Array<Skill>;
  skillsByProficiency: Array<Skill>;
  socialLinks: Array<SocialLink>;
  workHistory: Array<WorkHistory>;
};


export type QuerySkillArgs = {
  skillId: Scalars['ID'];
};


export type QuerySkillsArgs = {
  direction?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
};


export type QuerySkillsByProficiencyArgs = {
  minProficiency: Scalars['Float'];
};


export type QueryWorkHistoryArgs = {
  direction?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  name: Scalars['String'];
  proficiency: Scalars['Float'];
};

export type SocialLink = {
  __typename?: 'SocialLink';
  icon: Scalars['String'];
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type WorkHistory = {
  __typename?: 'WorkHistory';
  description: Scalars['String'];
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  jobTitle: Scalars['String'];
  name: Scalars['String'];
  startDate: Scalars['DateTime'];
};

export type SkillListQueryVariables = Exact<{ [key: string]: never; }>;


export type SkillListQuery = { __typename?: 'Query', skills: Array<{ __typename?: 'Skill', id: string, name: string, proficiency: number }> };

export type SocialLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type SocialLinksQuery = { __typename?: 'Query', socialLinks: Array<{ __typename?: 'SocialLink', id: string, url: string, icon: string }> };

export type WorkHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkHistoryQuery = { __typename?: 'Query', workHistory: Array<{ __typename?: 'WorkHistory', id: string, name: string, jobTitle: string, startDate: any, endDate?: any | null, description: string }> };


export const SkillListDocument = gql`
    query SkillList {
  skills(order: "proficiency", direction: "desc") {
    id
    name
    proficiency
  }
}
    `;

/**
 * __useSkillListQuery__
 *
 * To run a query within a React component, call `useSkillListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkillListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkillListQuery({
 *   variables: {
 *   },
 * });
 */
export function useSkillListQuery(baseOptions?: Apollo.QueryHookOptions<SkillListQuery, SkillListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SkillListQuery, SkillListQueryVariables>(SkillListDocument, options);
      }
export function useSkillListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SkillListQuery, SkillListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SkillListQuery, SkillListQueryVariables>(SkillListDocument, options);
        }
export type SkillListQueryHookResult = ReturnType<typeof useSkillListQuery>;
export type SkillListLazyQueryHookResult = ReturnType<typeof useSkillListLazyQuery>;
export type SkillListQueryResult = Apollo.QueryResult<SkillListQuery, SkillListQueryVariables>;
export const SocialLinksDocument = gql`
    query SocialLinks {
  socialLinks {
    id
    url
    icon
  }
}
    `;

/**
 * __useSocialLinksQuery__
 *
 * To run a query within a React component, call `useSocialLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSocialLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialLinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useSocialLinksQuery(baseOptions?: Apollo.QueryHookOptions<SocialLinksQuery, SocialLinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SocialLinksQuery, SocialLinksQueryVariables>(SocialLinksDocument, options);
      }
export function useSocialLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SocialLinksQuery, SocialLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SocialLinksQuery, SocialLinksQueryVariables>(SocialLinksDocument, options);
        }
export type SocialLinksQueryHookResult = ReturnType<typeof useSocialLinksQuery>;
export type SocialLinksLazyQueryHookResult = ReturnType<typeof useSocialLinksLazyQuery>;
export type SocialLinksQueryResult = Apollo.QueryResult<SocialLinksQuery, SocialLinksQueryVariables>;
export const WorkHistoryDocument = gql`
    query WorkHistory {
  workHistory(order: "endDate", direction: "desc") {
    id
    name
    jobTitle
    startDate
    endDate
    description
  }
}
    `;

/**
 * __useWorkHistoryQuery__
 *
 * To run a query within a React component, call `useWorkHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkHistoryQuery(baseOptions?: Apollo.QueryHookOptions<WorkHistoryQuery, WorkHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkHistoryQuery, WorkHistoryQueryVariables>(WorkHistoryDocument, options);
      }
export function useWorkHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkHistoryQuery, WorkHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkHistoryQuery, WorkHistoryQueryVariables>(WorkHistoryDocument, options);
        }
export type WorkHistoryQueryHookResult = ReturnType<typeof useWorkHistoryQuery>;
export type WorkHistoryLazyQueryHookResult = ReturnType<typeof useWorkHistoryLazyQuery>;
export type WorkHistoryQueryResult = Apollo.QueryResult<WorkHistoryQuery, WorkHistoryQueryVariables>;