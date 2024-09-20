import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Modals = (modItem) => {
    return (
        <div>
             <div id={modItem.modID} className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modItem.title}</h5>
            </div>
            <div className="modal-body">
              <p>{modItem.desc}</p>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Modals