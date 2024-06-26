import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 
import Home from './component/Home'; 

function App() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg  shadow-sm" style={{backgroundImage:"linear-gradient(to right, #9187d6, #8a7ad8, #856cd9, #805dd9, #7d4dd8)"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      
         
      </ul>
      <form class="d-flex" role="search"> 
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      <Home/>
    </div>
  );
}

export default App;
