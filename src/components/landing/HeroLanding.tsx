import LogoMain from '../shared/LogoMain'

const HeroLanding = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <div className="flex justify-center p-5 mb-5">
            <LogoMain width={500} />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroLanding
;('')
