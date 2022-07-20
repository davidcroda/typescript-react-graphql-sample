import { useSocialLinksQuery } from "../../generated/graphql"

export default function SocialLinks() {
  const { data, error, loading } = useSocialLinksQuery()

  if (!data || error || loading) {
    return <></>
  }

  const linkElements = data.socialLinks.map((link, i) => {
    return (
      <a href={link.url} key={`link_${i}`} target="_blank" rel="noreferrer"><i className={`fa ${link.icon}`}></i></a>
    )
  })
  return (
    <p className="personal-profile__social">
      {linkElements}
    </p>
  )
}