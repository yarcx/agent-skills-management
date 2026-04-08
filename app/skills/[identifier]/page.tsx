import { getSkills } from '../SKILLS'

const IdentifierPage = async ({ params }: { params: Promise<{ identifier: string }> }) => {
  const { identifier } = await params
  const skills = await getSkills()
  const skill = skills?.find(skill => skill.id === identifier)
  return (
    <article className="max-w-md mx-auto p-4 flex flex-col flex-auto gap-4">
      <p>{skill?.name}</p>
      <p>{skill?.description}</p>
      <p>{skill?.level}</p>
      <p>{skill?.category}</p>
    </article>
  )
}

export default IdentifierPage