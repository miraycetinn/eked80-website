function MemberCard({ member }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 shadow-sm h-full">
      {member.image && (
        <img
          src={member.image}
          alt={member.name}
          className="mb-4 h-24 w-24 rounded-full object-cover shadow"
        />
      )}
      <h3 className="text-lg font-semibold text-slate-900 text-center">
        {member.name}
      </h3>
      <p className="text-xs uppercase tracking-wide text-indigo-700 font-medium mt-1 mb-3 text-center">
        {member.role}
      </p>
      <p className="text-sm leading-relaxed text-slate-600 text-center">
        {member.bio}
      </p>
    </div>
  )
}

export default MemberCard

