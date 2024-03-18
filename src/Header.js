import { useEffect, useState} from 'react';
function Header(user){

    function abrirModalCriaConta(e){
        e.preventDefault();
        
    }
    return(
        
        <div className='header'>

            <div className='modalCriarConta'>
                <div className='formCriarConta'>
                    <div className='fecharModal'>X</div>
                    <h2>Criar Conta</h2>
                    <form>
                        <input type="text" placeholder="Email..."/>
                        <input type="text" placeholder=" User..."/>
                        <input type="password" placeholder="Senha"/>
                        <input type='submit' value=' Cria Conta'></input>   
                       
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