import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { TextInput, HelperText, Snackbar } from 'react-native-paper';
import { cadastrar } from "../../servicos/requisicoesFirebase";
import { estilos } from "./estilos";

export function Cadastrar({ navigation }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')
    const [cpf, setcpf] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    const [statusError, setStatusError] = useState('')
    const [mensagemError, setMensagemError] = useState('')
    const [statusSnakbar, setStatusSnakbar] = useState(false)
    const [mensagemSnakbar, setMensagemSnakbar] = useState(false)

    function limpaCampos() {
        setEmail('')
        setSenha('')
        setConfirmaSenha('')
        navigation.navigate('Login')
    }
    async function realizarCadastro() {
        if (nome == '') {
            setMensagemError('Nome não pode ficar vazio!')
            setStatusError('nome')
        } else if(email == '') {
            setMensagemError('E-mail não pode ficar vazio!')
            setStatusError('email')
        } else if(numero == '') {
            setMensagemError('Número não pode ficar vazio!')
            setStatusError('numero')
        } else if (senha == '') {
            setMensagemError('Senha não pode ser em branco')
            setStatusError('senha')
        } else if (confirmaSenha == '') {
            setMensagemError('Confirmação de Senha não pode ser vazio')
            setStatusError('confirmaSenha')
        } else if (senha != confirmaSenha) {
            setMensagemError('Senhas não conferem')
            setStatusError('senhaNaoConfere')
        }
        else {
            const resultado = await cadastrar(email, senha, nome, numero)
            setStatusSnakbar(true)
            if (resultado == 'sucesso') {
                setMensagemSnakbar("E-mail cadastrado com sucesso!")
                setTimeout(limpaCampos, 3000)
            }
            else {
                setMensagemSnakbar(resultado)
            }
            setMensagemError('')
            setStatusError('')
        }
    }
    return (
        <View style={estilos.container}>
              <TextInput
                label="Nome e Sobrenome"
                placeholder="Insira seu Nome e Sobrenome"
                keyboardType="nome-address"
                value={nome}
                onChangeText={setNome}
                mode="outlined"
                error={statusError == 'nome'}
                style={estilos.input} />
            {statusError == 'nome' ? <HelperText type="error" visible={statusError == 'nome'}>
                {mensagemError}
            </HelperText> : null}
            <TextInput
                label="E-mail"
                placeholder="Insira seu e-mail"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                mode="outlined"
                error={statusError == 'email'}
                style={estilos.input} />
            {statusError == 'email' ? <HelperText type="error" visible={statusError == 'email'}>
                {mensagemError}
            </HelperText> : null}
            <TextInput
                label="Número"
                keyboardType="numero-address"
                placeholder="(00) 0 0000-0000"
                value={numero}
                onChangeText={setNumero}
                mode="outlined"
                error={statusError == 'numero'}
                style={estilos.input} />
            {statusError == 'numero' ? <HelperText type="error" visible={statusError == 'numero'}>
                {mensagemError}
            </HelperText> : null}
            <TextInput
                label="CPF"
                keyboardType="cpf-address"
                placeholder="000.000.000-00"
                value={cpf}
                onChangeText={setcpf}
                mode="outlined"
                error={statusError == 'cpf'}
                style={estilos.input} />
            {statusError == 'cpf' ? <HelperText type="error" visible={statusError == 'cpf'}>
                {mensagemError}
            </HelperText> : null}
            <TextInput
                label="Senha"
                placeholder="Crie uma senha"
                value={senha}
                onChangeText={setSenha}
                mode="outlined"
                error={statusError == 'senha'}
                secureTextEntry
                style={estilos.input} />
            {statusError == 'senha' ? <HelperText type="error" visible={statusError == 'senha'}>
                {mensagemError}
            </HelperText> : null}
            <TextInput
                label="Confirmar Senha"
                placeholder="Repita sua senha"
                value={confirmaSenha}
                onChangeText={setConfirmaSenha}
                mode="outlined"
                error={statusError == 'confirmaSenha'}
                secureTextEntry
                style={estilos.input} />
            {statusError == 'confirmaSenha' ? <HelperText type="error" visible={statusError == 'confirmaSenha'}>
                {mensagemError}
            </HelperText> : null}
            <HelperText type="error" visible={statusError == 'senhaNaoConfere'}>
                {mensagemError}
            </HelperText>
            <TouchableOpacity
                style={estilos.botao} onPress={() => realizarCadastro()}>
                <Text style={estilos.texto}>Cadastrar</Text>
            </TouchableOpacity>
            <Snackbar visible={statusSnakbar} onDismiss={() => setStatusSnakbar(false)} duration={2000}
                action={{
                    label: 'OK',
                    onPress: () => {
                        setStatusSnakbar(false)

                    },
                }}>
                {mensagemSnakbar}
            </Snackbar>
        </View>
    )
}