async function login() {
  const name = document.getElementById("name").value
  const password = document.getElementById("password").value
  try { 
    const makeLogin = await fetch('http://localhost:4000/usuarios/login', {
      method: 'POST',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify({
        name,
        password
      })
    });
    const parsedLogin = await makeLogin.json()
    localStorage.setItem("tokenUsuario", JSON.stringify(parsedLogin.token))
    let tokenUsuario = await JSON.parse(localStorage.getItem('tokenUsuario'))
    console.log(tokenUsuario)
  } catch(err) {
    throw new Error("Nombre o contraseña incorrectos")
  }
}