<template>
  <div>
	<nav class="container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#"><i class="fas fa-headset"></i> Games Opinion</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <router-link to="/" class="nav-link active " aria-current="page">
        <i class="fas fa-home"></i><span> Home</span></router-link> 
       <router-link to="/opiniones" class="nav-link ms-3"><i class="fas fa-comments"></i><span> Opiniones</span></router-link>
        <router-link to="/administracion" class="nav-link ms-3"> <i class="fas fa-users-cog"></i> <span> Administración</span></router-link>
       
      </div>
    </div>
  </div>
</nav>
</div>
</template>
<style>
span{
  margin-left: 5px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

