import Yanfabao from '../Assets/Yanfabao.png'
import Palendar from '../Assets/palendar-social.jpg'
import Docs from '../Assets/Docs.png'
import Hmmm from '../Assets/hmmm.png'
import Tiaotiao from '../Assets/Tiaotiao.png'
const callouts = [
  {
    name: 'Yanfabao',
    description: 'A platform inside Alibaba',
    imageSrc: Yanfabao,
    imageAlt: 'Yanfabao',
    href: '#0',
  },
  {
    name: 'Palendar',
    description: 'A group todo list',
    imageSrc: Palendar,
    imageAlt: 'Palendar',
    href: 'http://huangyou.dev.fast.sheridanc.on.ca/group-todo-list/login.php',
  },
  {
    name: 'Docs',
    description: 'A doc app',
    imageSrc: Docs,
    imageAlt: 'Docs',
    href: 'http://huangyou.dev.fast.sheridanc.on.ca/hyfDocs/',
  },
  {
    name: 'Hmmm',
    description: 'A CMS for teachers',
    imageSrc: Hmmm,
    imageAlt: 'Hmmm',
    href: 'http://hmmm.itheima.net/#/login',
  },
  {
    name: 'Tiaotiao',
    description: 'A CMS for Editors',
    imageSrc: Tiaotiao,
    imageAlt: 'Tiaotiao',
    href: 'http://dylan_hyf.gitee.io/the-article/#/login',
  }
]

function Projects() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-10 sm:py-8 lg:py-12 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">My Projects</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative pb-10">
                <div className="relative w-full bg-transparent overflow-hidden group-hover:opacity-75 sm:aspect-w-16 sm:aspect-h-9 sm:h-64 lg:aspect-w-16 lg:aspect-h-9">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href} target={callout.href.length > 2 ? '_blank' : ''}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
