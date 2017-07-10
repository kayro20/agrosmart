import React from 'react';

class Pivo extends React.Component {
  render() {
    return(
      <div className="col-sm-3 pivo">
        <div className="card">
          <div className="title"><h4 className="car-title">{ this.props.title }</h4></div>
          <div className="pivo-image"
               style={{background: "url('" + this.props.background + "') center no-repeat"}}>
          </div>
          <div className="card-block">
            <p className="card-text"><i className="fa fa-leaf"></i>{ this.props.culture }</p>
            <p className="card-text"><i className="fa fa-signal"></i>{ this.props.phase }</p>
            <div className="status">{ this.props.status }</div>
          </div>
          <div className="card-footer">
            <button data-toggle="modal" data-target="#modal"><i className="fa fa-edit fa-2x"></i></button>
            <a><i className="fa fa-bar-chart fa-2x"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

// Modal to Edit date time. Inputs "time" and "date" could be replaced by
// "datetime" input.
class Modal extends React.Component {
  render() {
    return(
     <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="exampleModalLabel">Insira o valor para o dia 22/06/2017</h4>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label className="control-label">Irrigação (horas):</label>
                <input className="form-control" type="time" id="time-hours" />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="control-label">Data início:</label>
                <input className="form-control" type="date" id="time-date"></input>
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="control-label">Hora início:</label>
                <input className="form-control" type="time" id="start-time"></input>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Confirmar</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default class InfoCard extends React.Component {
  render() {
    return(
      <div className="pivo-card">
        <Modal />
        <Pivo
          title="Pivo 1"
          background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/215/thumb_Pivo1.png"
          culture="Milho A."
          phase="Produção"
          status="Não irrigar"
        />
        <Pivo
          title="Pivo 2"
          background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/216/thumb_Pivo2.png"
          culture="Milho B."
          phase="Produção"
          status="Irrigar"
        />
        <Pivo
          title="Pivo 3"
          background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/217/thumb_Pivo3.png"
          culture="Milho C."
          phase="Cultivo"
          status="Não irrigar"
        />
        <Pivo
          title="Pivo 4"
          background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/218/thumb_Pivo4.png"
          culture="Milho D."
          phase="Produção"
          status="Não irrigar"
        />
        <Pivo
          title="Pivo 5"
          background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/219/thumb_Pivo5.png"
          culture="Milho A."
          phase="Crescimento"
          status="Não irrigar"
        />
        <Pivo
          title="Pivo 6"
          background="https://storage.googleapis.com/vai-agrosmart/uploads/field/image/image/220/thumb_Pivo6.png"
          culture="Milho A."
          phase="Produção"
          status="Não irrigar"
        />
      </div>
    );
  }
}
