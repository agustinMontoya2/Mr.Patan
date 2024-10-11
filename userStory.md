<h1>Homework 1</h1>
<h2>User stories</h2>
<h3> Como usuario invitado quiero poder registrarme para acceder a mis mascotas y sus turnos.</h3>
<h4>Se me va a pedir:</h4>

<h5>Nombre de usuario:</h5>
<input type="text" required>
<h5>Email:</h5>
<input type="email" required>
<h5>Contraseña:</h5>

<input type="password" required>

<button type="submit">Enviar</button>

<h3>Como usuario invitado quiero poder iniciar sesión para gestionar mis mascotas y sus turnos.</h3>
<h4>Se me va a pedir:</h4>

<h5>Nombre de usuario o Email:</h5>
<input type="text" required>
<h5>Contraseña</h5>
<input type="password" required>

<button type="submit">Enviar</button>
<button type="submit">Registrarse</button>

<h3>Como usuario registrado quiero poder ver y modificar mi información personal </h3>
<h4>Se me va a permitir:</h4>
<ul>
<li>Cambiar nombre de usuario</li>
<li>Cambiar email</li>
<li>Cambiar contraseña</li>
</ul>

<h3>Como usuario registrado quiero poder ver mis mascotas para gestionar sus turnos.</h3>
<ul>
<li>    🐶Pepe</li>
<li>    🐶Doki</li>
</ul>
agregar mascota  +

<h3>Como usuario registrado quiero poder agregar mis mascotas para gestionar sus turnos.</h3>
<h4>Agregar Mascota:</h4>

<form>
<h5>Nombre:</h5>
<input type="text" required>
<h5>Edad:</h5>
<input type="number" required>
<h5>Raza:</h5>
<input type="text" required>
<h5>Foto:</h5>
<input type="text" required>

<button type="submit">Enviar</button>

</form>

<h3>Como usuario registrado quiero poder seleccionar una mascota para ver y gestionar su información y turnos.</h3>
<h4>Se le va a mostrar:</h4>
<ul>
<li>Foto</li>
<li>Nombre</li>
<li>Edad</li>
<li>Raza</li>
</ul>

<h3>
Como usuario registrado quiero poder agregar un turno para una mascota específica para asegurarme de que tenga atención veterinaria.
</h3>
<h4>Se me va a pedir:</h4>

<h5>Fecha</h5>
<input type="date" required>
<h5>Hora</h5>
<select >
<option>10:00a.m</option>
<option>10:30a.m</option>
<option>11:00a.m</option>
<option>11:30a.m</option>
<option>12:00p.m</option>
<option>12:30p.m</option>
<hr>
<hr>
<option>16:00a.m</option>
<option>16:30a.m</option>
<option>17:00a.m</option>
<option>17:30a.m</option>
<option>18:00a.m</option>
<option>18:30a.m</option>
<option>19:00a.m</option>
</select>
<h5>Asunto</h5>
<select >
<option>baño</option>
<option>corte</option>
<option>baño y corte</option>
<option>consultorio</option>
</select>

<button type="submit">Enviar</button>

<h3>Como usuario registrado quiero poder cancelar un turno hasta un día antes para evitar confusiones en la agenda.</h3>
<div style="display: flex; align-items: center;">
  <button style="margin-right: 8px;">Pendiente</button>
  <span style="font-size: 20px;">🔴</span>
</div>
<h3>Como usuario registrado quiero poder acceder a mi perfil desde cualquier sección de mi pagina</h3>

<h3>Como usuario registrado quiero poder cerrar sesión para proteger mi información personal</h3>
<div style="background-color: white; width: 160px">
<ul >
<li style="color: black">Mi cuenta</li>
<li style="color: black">Cerrar sesion</li>
</ul>
</div>

<h2>Esquema de base de datos</h2>
<img src="DiagramaER.png" alt="Diagrama ER" width="800">
