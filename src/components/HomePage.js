import React from 'react';



class HomePage extends React.Component {




  

  render() {
    return (
      <div className="container">
        <h1>Subir Archivo Json</h1>
        <form method="POST" action="/upload" encType="multipart/form-data">
          <input type="file" name="file" />
          <input type="submit" value="Enviar a Azure Devops" />
        </form>
      </div>
    );
  }
}

export default HomePage;
