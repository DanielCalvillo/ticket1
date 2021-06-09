async function signUp() {
  const name = document.getElementById("name").value
  const first_name = document.getElementById("first_name").value
  const last_name = document.getElementById("last_name").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  try { 
    const response = await fetch('http://localhost:4000/usuarios/crear', {
      method: 'POST',
      headers: {"Content-type": "application/json;charset=UTF-8"},
      body: JSON.stringify({
        name,
        first_name,
        last_name,
        email,
        password
      })
    });
    const parsedResponse = await response.json()
    console.log(parsedResponse)
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