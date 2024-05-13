import { StyleBotaoPadrao } from "./Styles";

function BotaoPadrao(props) {
    return (
        <div>
            <StyleBotaoPadrao onClick = {props.onClick}>
            ENTRAR
            </StyleBotaoPadrao>   
        </div>

    )
}

export default BotaoPadrao