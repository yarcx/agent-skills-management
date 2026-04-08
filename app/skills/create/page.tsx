"use client"

import { useActionState } from 'react';
import { createSkill } from '@/app/actions/skills';

const initialState = {
  message: ''
}

function NewSkillPage() {
  const [state, formAction, pending] = useActionState(createSkill, initialState)
  return (
    <form action={formAction} className="flex max-w-md mx-auto flex-col gap-4 p-4">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Skill name?</legend>
        <input type="text" className="input" name="name" placeholder="Name" />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Skill description</legend>
        <textarea name="description" className="input" placeholder="Description" rows={3} />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">What is your category?</legend>
        <input type="text" className="input" name="category" placeholder="Category" />
      </fieldset>

      <p aria-live="polite" className="text-red-500">{state?.message}</p>

      <div className="flex gap-4 w-2xl">
        <button type="submit" className="btn btn-primarry">{pending ? "Adding..." : "Add Skill"}</button>
      </div>
    </form>
  )
}

export default NewSkillPage