'use server'

import { addSkills } from "../skills/SKILLS";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

export async function createSkill(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const category = formData.get('category') as string;

  if (!name || !description || !category) {
    return { message: 'All fields are required' }
  }

  const newSkill = {
    id: Date.now().toString(),
    name,
    description,
    category,
    level: 'Beginner',
  }

  await addSkills(newSkill)
  revalidatePath('/skills')
  redirect('/skills')
}