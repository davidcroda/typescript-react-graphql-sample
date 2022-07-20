import { gql } from "@apollo/client";

export const SOCIAL_LINK_QUERY = gql`
query SocialLinks {
  socialLinks {
    id
    url
    icon
  }
}
`