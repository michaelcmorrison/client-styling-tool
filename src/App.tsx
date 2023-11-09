import './App.scss'
import { Tweakable } from './Tweakable'

function App() {

  return (
    <div className='content'>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <div className="block">
            <Tweakable tag="h2">This is an h1</Tweakable>
            <Tweakable tag="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque totam voluptatibus, consectetur pariatur ut odio voluptates saepe ratione nihil esse tenetur aliquid autem eos cum ipsum dolore. Amet assumenda fuga autem, iusto tenetur quam, temporibus unde, velit maiores rem minima sequi. Debitis, veniam maxime voluptates necessitatibus itaque id autem quis?</Tweakable>
          </div>
          <div className="columns">
            <div className="column">col</div>
            <div className="column">col</div>
            <div className="column">col</div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
