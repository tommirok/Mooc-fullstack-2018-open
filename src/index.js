import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <h1>{props.otsikko}</h1>
  )
}
const Osa = (props) => {
  const { text, number, symbol } = props
  return (
    <p>{text}: {number} {symbol || null}</p>
    
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
const App = () => {
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
      <Otsikko otsikko={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}
const Button = (props) => {
  const { btnText, onClick } = props
  return (
    <button onClick={onClick}>{btnText}</button>
  )
}
const Statistics = (props) => {
  const { hyvä, huono, neutraali, laske, positiivisia } = props
  return (
    <div>
      <Otsikko otsikko={"statistiikka"} />
      <Statistic text={"hyvä"} number={hyvä} />
      <Statistic text={"neutraali"} number={neutraali} />
      <Statistic text={"huono"} number={huono} />
      <Statistic text={"keskiarvo"} number={laske} />
      <Statistic text={"Positiivista"} number={positiivisia} symbol={"%"} />
    </div>  
  )
}
const Statistic = (props) => {
  const { text, number, symbol } = props
  return (
    <p>{text}: {number} {symbol || null}</p>

  )
}
class PalauteAppi extends Component {
  static initialState = () => ({
    hyväCount: null,
    neutraaliCount: null,
    huonoCount: null
  })
  constructor(props) {
    super(props)
    this.state = PalauteAppi.initialState()
  }
  
  addHyvä = () => {
    var newState = { ...this.state };
    newState.hyväCount += 1;
    this.setState(newState);
    console.log("tick")
  }
  addNeutraali = () => {
    var newState = { ...this.state };
    newState.neutraaliCount += 1;
    this.setState(newState);
    console.log("tick")
  }
  addHuono = () => {
    var newState = { ...this.state };
    newState.huonoCount += 1;
    this.setState(newState);
    console.log("tick")
  }
  laske = () => {
    const { hyväCount, neutraaliCount, huonoCount } = this.state
    const jakaja = hyväCount + neutraaliCount + huonoCount;
    const num = ((this.state.hyväCount + (this.state.huonoCount*-1)) / jakaja);
    const noRound = parseFloat(num).toFixed(2)
    const round = parseFloat(Math.round(num * 100) / 100).toFixed(1);
    return round;

  }
 
  positiivisia = () => {
    const { hyväCount, neutraaliCount, huonoCount } = this.state
    const prosentteina = hyväCount / (hyväCount + neutraaliCount + huonoCount) * 100;
    return parseFloat(prosentteina).toFixed(2)
    
  }
  render() {
    const { hyväCount, neutraaliCount, huonoCount } = this.state
    return (
      <div>
        <Otsikko otsikko={"anna palautetta"} />
        <Button btnText={"hyvä"} onClick={this.addHyvä} />
        <Button btnText={"neutraali"} onClick={this.addNeutraali} />
        <Button btnText={"huono"} onClick={this.addHuono} />
        {hyväCount || neutraaliCount || huonoCount ?
        <Statistics
          hyvä={hyväCount}
          huono={huonoCount}
          neutraali={neutraaliCount}
          laske={this.laske()}
          positiivisia={this.positiivisia()}
        />
       :null }
      </div>
    )
  }
}

ReactDOM.render(
  <PalauteAppi />,
  document.getElementById('root')
)
