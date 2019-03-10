document.getElementById(validar).style.display = "none";//torna o elemento de id ID_DO_ELEMENTO invisível.
document.getElementById(validar).style.display = "inline";//torna o elemento de id ID_DO_ELEMENTO visível.


function validarCampos(){
	
	function validarCampos() {
			if (document.getElementById("nome").value == '') {
				alert('Informe o nome do usuário!');
				return false;
			}
			
			else if (document.getElementById("cpfUsuario").value == '') {
				alert('Informe o CPF para cadastro!');
				return false;
			}
			
			else if(document.getElementById("telefoneUser").value == '') {
				alert('Informe o número de telefone');
				return false;
			}
			
			else if(document.getElementById("dataNascUsuario").value == ''){
				alert('Informe a data de nascimento');
				return false;
			}
			
		return true;
	}
	
	
	
	
}
