import React from 'react'

function SkillsLoading() {
  return (
    <div className="grid md:grid-col-3 gap-6 max-w-md mx-auto">
      {
        [1, 2, 3, 4, 5, 6].map(i => <div key={i} className="card bg-base-200">
          <div className="card-body">
            <div className="h-6 w-3/4"></div>
            <div className="h-6 w-full mt-2"></div>
          </div>
        </div>)
      }
    </div>
  )
}

export default SkillsLoading