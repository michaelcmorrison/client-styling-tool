import './App.scss'
import { Tweakable } from './Tweakable'

function App() {

  return (
    <div className='content py-5'>
      <main>
        <section>
            <div className="container">
              <Tweakable tag="h1">Lorem ipsum dolor sit amet.</Tweakable>
              <Tweakable tag="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque totam voluptatibus, consectetur pariatur ut odio voluptates saepe ratione nihil esse tenetur aliquid autem eos cum ipsum dolore. Amet assumenda fuga autem, iusto tenetur quam, temporibus unde, velit maiores rem minima sequi. Debitis, veniam maxime voluptates necessitatibus itaque id autem quis?</Tweakable>
              <Tweakable tag="ul">
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </Tweakable>
            </div>
        </section>
      </main>
    </div>
  )
}

export default App
