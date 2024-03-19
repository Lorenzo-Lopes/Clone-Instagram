import { useEffect, useState} from 'react';
import {auth} from './fireBase'

function Header(user){


    function abrirModalCriaConta(e){
        e.preventDefault();
        let modal = document.querySelector('.modalCriarConta')
        modal.style.display = 'block'
        
    }
    function fecharModal(e){
        e.preventDefault();
        let modal = document.querySelector('.modalCriarConta')
        modal.style.display='none'
    }

    function criarConta(e){
        e.preventDefault();
        const email = document.querySelector('#email').value
        const usern = document.querySelector('#user').value
        const senha= document.querySelector('#senha').value

        auth.createUserWithEmailAndPassword(email,senha)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName:usern
            })
            let modal = document.querySelector('.modalCriarConta')
        modal.style.display='none'
        })
        // .catch((error)=>{
        //     alert(error.message)
        // })

    }
    return(
        
        <div className='header'>

            <div className='modalCriarConta'>
                <div className='formCriarConta'>
                    <div className='fecharModal' onClick={(e)=>{ fecharModal(e) }}>X</div>
                    <h2>Criar Conta</h2>
                    <form>
                        <input id='email' type="text" placeholder="Email..."/>
                        <input id='user' type="text" placeholder=" User..."/>
                        <input id='senha' type="password" placeholder="Senha"/>
                        <input type='submit' value=' Cria Conta' onClick={(e)=>{criarConta(e)}}></input>   
                       
                    </form>
                </div>
            </div>

            <div className='center'>
                 <div className='header__logo'>
                    <a href='#'><img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'></img>'</a>
                 </div>
                {(user.user)?

                    <div className='header__logadoInfo'>
                        <span>Ola, <b>{user.user}</b></span>
                        <a href='#'>Upload!</a>
                    </div>        
                :
                    <div className='header__loginForm'>
                        <form>
                            <input type='text' placeholder='Login'></input>
                            <input type='password' placeholder='Senha'></input>
                            <input type='submit' name='acao' value="Logar!"></input>
                            
                        </form>
                        <div className='btn__criaConta'> 
                            <a onClick={(e)=>{ abrirModalCriaConta (e) }} href='#'>Criar Conta</a>

                         </div>
                    </div>
                }
            </div>
         </div>
    )
 
}
export default Header;