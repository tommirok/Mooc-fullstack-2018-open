import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <h1>{props.kurssi}</h1>
  )
}
const Osa = (props) => {
  const { text, number } = props
  return (
    <p>{text}: {number}</p>
  )
}
const Sisalto = (props) => {
  const { osat } = props
  return (
    <div>
      <Osa text={osat[0].nimi} number={osat[0].tehtavia} />
      <Osa text={osat[1].nimi} number={osat[1].tehtavia} />
      <Osa text={osat[2].nimi} number={osat[2].tehtavia} />
    </div>
  )
}
const Yhteensa = (props) => {
  const { osat } = props
  return (
    <p>yhteensä {osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia}</p>
  )
}
const App = (props) => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },

      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },

      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }
  return (
    <div>
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
