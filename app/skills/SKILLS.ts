export type Skills = {
  id: string,
  name: string,
  description: string,
  level: string,
  category: string,
  
}

export let SKILLS: Skills[] = [
  {
    id: "1",
    name: "Skill 1",
    description: "Description 1",
    level: "Level 1",
    category: "Category 1",
  },
  {
    id: "2",
    name: "Skill 2",
    description: "Description 2",
    level: "Level 2",
    category: "Category 2",
  },
  {
    id: "3",
    name: "Skill 3",
    description: "Description 3",
    level: "Level 3",
    category: "Category 3",
  },
]

export async function getSkills() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return [...SKILLS]
}

export async function addSkills(skill: Skills) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  SKILLS = [...SKILLS, skill]
}

export function updateSkills(skill: Skills) {
  const index = SKILLS.findIndex((s) => s.id === skill.id)
  if (index !== -1) {
    SKILLS[index] = skill
  }
}