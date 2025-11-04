import { useState } from 'react'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import MemberCard from '../components/MemberCard'
import { projects } from '../data/projects'
import { members } from '../data/members'

function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div>
      <Hero />

      {/* Biz Kimiz + Vizyonumuz + Misyonumuz Section */}
      <section id="biz-kimiz" className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-slate-900">
            Biz Kimiz?
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-slate-700 text-center mb-10">
            Eğitime ve Kültüre Erişim Derneği eğitim ve kültürel faaliyetlerde bulunan öğretmen,
            öğrenci, eğitim müfettişleri ve farklı meslek gruplarından kişilerin katılımı ile
            2022 yılında Osmaniye'de kurulmuştur. Eğitim, kültür ve çevre faaliyetlerinin
            etkinleştirilmesi ve geliştirilmesini sağlamak ve bu konuda ulusal ve uluslararası
            çalışmalar yapan kişi ve kuruluşlara destek vermek ve iş birliği yapmak amacı ile
            kurulmuştur.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vizyonumuz kartı */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 md:p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                Vizyonumuz
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-700">
                Her bireyin, sosyoekonomik koşulları ne olursa olsun, nitelikli eğitime ve kültürel
                yaşama eşit şekilde erişebildiği, öğrenmenin yaşam boyu sürdüğü, katılımcı ve
                kapsayıcı bir toplumun inşasına katkıda bulunmak.
              </p>
            </div>

            {/* Misyonumuz kartı */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 md:p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                Misyonumuz
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-700">
                Kırsaldaki bireyler, göçmenler ve özel gereksinimliler başta olmak üzere
                dezavantajlı grupların eğitime ve kültürel yaşama eşit erişimini destekliyoruz.
                Dijital dönüşüme uyumlu, yenilikçi projelerle yaşam boyu öğrenmeyi ve toplumsal
                katılımı güçlendirmeyi amaçlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projelerimiz Section */}
      <Section id="projeler" title="Projelerimiz" className="bg-slate-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onMore={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </Section>

      {/* Proje Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-lg w-full rounded-2xl bg-white p-6 md:p-7 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 text-2xl leading-none"
              aria-label="Kapat"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold text-slate-900 mb-3 pr-8">
              {selectedProject.title}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-slate-700 whitespace-pre-line">
              {selectedProject.longDescription}
            </p>
          </div>
        </div>
      )}

      {/* Yönetim ve Üyeler Section */}
      <section id="yonetim" className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
              Yönetim ve Üyeler
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              Derneğimizin çalışmalarına yön veren ekip.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

