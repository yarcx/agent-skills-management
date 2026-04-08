import React from 'react'
import { getSkills, SKILLS } from './SKILLS'
import Link from 'next/link'

const Page = async () => {
  const skills = await getSkills()
  return (
    <section className="p-4 flex flex-col gap-4 max-w-md mx-auto">
      <h1>Skills</h1>
      <Link href="/skills/create" className="btn btn-primary self-end">Create Skill</Link>
      <ul className="menu">
        {skills.map((skill) => (
          <li key={skill.id}>
            <Link href={`/skills/${skill.id}`}>{skill.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Page