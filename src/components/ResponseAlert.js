import React from 'react';

class ResponseAlert extends React.Component {

    
    render(){
   if(this.props.isSuccess){
        return(<div className="alert alert-success" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>Success!</strong> {this.props.successMessage}
      </div>
        );
}else if(this.props.isSuccess===false){
    return (
        <div className="alert alert-danger" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Failed! </strong> {this.props.errorMessage}
        </div>);
}else if(this.props.isSuccess===null){
    return null;
}

}
}
export default ResponseAlert;