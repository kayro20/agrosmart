import React from 'react';

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
                <input className="form-control" id="recipient-name" />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="control-label">Data início:</label>
                <textarea className="form-control" id="message-text"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="control-label">Hora início:</label>
                <textarea className="form-control" id="message-text"></textarea>
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
        <div className="col-sm-3">
          <div className="card">
            <div className="title"><h4 className="car-title">Pivo</h4></div>
            <div className="pivo-image"></div>
            <div className="card-block">
              <p className="card-text"><i className="fa fa-leaf"></i>Cultura: Milho A.</p>
              <p className="card-text"><i className="fa fa-signal"></i>Em produção</p>
              <div className="status">Não deve irrigar</div>
            </div>
            <div className="card-footer">
              <button data-toggle="modal" data-target="#modal"><i className="fa fa-edit fa-2x"></i></button>
              <a><i className="fa fa-bar-chart fa-2x"></i></a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="title"><h4 className="car-title">Pivo</h4></div>
            <div className="pivo-image"></div>
            <div className="card-block">
              <p className="card-text"><i className="fa fa-leaf"></i>Cultura: Milho A.</p>
              <p className="card-text"><i className="fa fa-signal"></i>Em produção</p>
              <div className="status">Não deve irrigar</div>
            </div>
            <div className="card-footer">
              <button><i className="fa fa-edit fa-2x"></i></button>
              <a><i className="fa fa-bar-chart fa-2x"></i></a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="title"><h4 className="car-title">Pivo</h4></div>
            <div className="pivo-image"></div>
            <div className="card-block">
              <p className="card-text"><i className="fa fa-leaf"></i>Cultura: Milho A.</p>
              <p className="card-text"><i className="fa fa-signal"></i>Em produção</p>
              <div className="status">Não deve irrigar</div>
            </div>
            <div className="card-footer">
              <button><i className="fa fa-edit fa-2x"></i></button>
              <a><i className="fa fa-bar-chart fa-2x"></i></a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <div className="title"><h4 className="car-title">Pivo</h4></div>
            <div className="pivo-image"></div>
            <div className="card-block">
              <p className="card-text"><i className="fa fa-leaf"></i>Cultura: Milho A.</p>
              <p className="card-text"><i className="fa fa-signal"></i>Em produção</p>
              <div className="status">Não deve irrigar</div>
            </div>
            <div className="card-footer">
              <button><i className="fa fa-edit fa-2x"></i></button>
              <a><i className="fa fa-bar-chart fa-2x"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
