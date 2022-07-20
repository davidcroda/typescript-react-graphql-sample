
type BioProps = {
  name: string
  title: string
  age: Number
  phone: string
  email: string
  address: string
}

const stripSymbols = (phone: string) => phone.replace(/[^0-9]+/g, '')

export default function Bio({ name, title, age, phone, email, address }: BioProps) {
  return (
    <>
      <p className="personal-profile__name">{name}</p>
      <p className="personal-profile__work">{title}</p>
      <div className="personal-profile__contacts">
        <dl className="contact-list contact-list__opacity-titles">
          <dt>Age:</dt>
          <dd>{age.toString()}</dd>
          <dt>Phone:</dt>
          <dd><a href={`tel:${stripSymbols(phone)}`}>{phone}</a></dd>
          <dt>Email:</dt>
          <dd><a href={`mailto:${email}`}>{email}</a></dd>
          <dt>Address:</dt>
          <dd>{address}</dd>
        </dl>
      </div>
    </>
  )
}