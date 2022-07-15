import React from "react";
import '../App.css';

class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
        fetch("https://hubeau.eaufrance.fr/api/v1/temperature/station?code_departement=33")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result['data']);
            this.setState({
              isLoaded: true,
              items: result['data']
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
            <section>
            {items.map(item => (
              <div className="card" key={item.libelle_commune}>
                  <div className="info-title">
                La Station: 
                </div>
                <div className="info">
                {item.libelle_station}
                </div>
                <div className="info-title">
                Température de l'eau
                </div>
                <div className="info">
                {item.resultat}°C
                </div>
                <div className="info-title">
                Localisation: 
                </div>
                <div className="info">
                {item.localisation}
                </div>
                <div className="info-title">
                Commune: 
                </div>
                <div className="info">
                {item.code_commune} {item.libelle_commune}
                </div>
             
                
              </div>
            ))}
            </section>
        );
      }
    }
  }

  export default List
        
           