
import React,{useContext, useEffect, useState} from "react";
import { Navigate, useNavigate} from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const SignUp = () => {
   let navigate = useNavigate();
   const { store, actions } = useContext(Context);
	const token = sessionStorage.getItem("token");

   const registro = async (evento) => {
      evento.preventDefault();
      let username =evento.target[0].value;
      let email=evento.target[1].value;
      let name=evento.target[2].value;
      let respuestaSecreta=evento.target[3].value;
      let pass=evento.target[4].value;
      let passRepetir=evento.target[5].value;
      
      if(pass != passRepetir){
          alert("las contraseñas deben ser iguales")
      }
      if(username == ""|| email == "" || name == "" || respuestaSecreta == "" || pass == ""|| passRepetir == ""){
         alert("Debes completar los datos");
      }else{
         await actions.SignUp(
            JSON.stringify({
					email: email,
					password: pass,

				})
         );
         alert("Registro completado");
         navigate("/login")
      }
   }
   
    return (
       <form onSubmit={registro} >
          <div className="container contenedor-principal"  >
             <div className="card carta-contenedora" >
 
                <div className="card-body text-center">
                   <h2 className="card-title">Registrar Nuevo Usuario</h2>
                   <div className="container d-flex justify-content-center mt-5">
                      <div className="form-group">
                         <input type="text" className="form-control mb-5  input-id" name="username" placeholder="Username" />
 
                      </div>
                      <div className="form-group ms-3">
                         <input type="email" className="form-control mb-5 input-nombre"
                            name="email" placeholder="Email" />
                      </div>
                   </div>
                   <div className="container d-flex justify-content-center">
                      <div className="form-group">
                         <input type="text" className="form-control mb-5 input-id" name="nombre" placeholder="Nombre" />
                      </div>
                      <div className="form-group ms-3">
                         <input type="text" className="form-control mb-5 input-nombre" name="apellido" placeholder="Respuesta Secreta" />
 
                      </div>
                   </div>
                   <div className="container d-flex justify-content-center">
                      <div className="form-group">
                         <input type="password" className="form-control mb-5 input-id" name="contraseña" id="inputPassword" placeholder="Contraseña"/>
                      </div>
                      <div className="form-group ms-3">
                         <input type="password" className="form-control mb-5 input-nombre" name="repetirContraseña" id="inputPassword" placeholder="Repetir Contraseña" />
                      </div>
                   </div>
                   <br />
                   <button href="#"type="submit" className="btn btn-primary text-center" value="Registrarse"><h3>Registrarse</h3></button>
                   <br />
                   Ya tienes cuenta ?<button type="button" className="btn btn-link mb-1">Inicia sesión aquí</button>
 
                </div>
             </div>
          </div>
       </form>
    )
 }
 